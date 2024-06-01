import { createServerClient } from '@supabase/ssr';
import { Handle, redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

// Create Supabase client
const supabaseHandle: Handle = async ({ event, resolve }) => {
  const supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      get: (key) => event.cookies.get(key),
      set: (key, value, options) => {
        event.cookies.set(key, value, { ...options, path: '/' });
      },
      remove: (key, options) => {
        event.cookies.delete(key, { ...options, path: '/' });
      },
    },
  });

  event.locals.supabase = supabase;

  event.locals.safeGetSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      return { session: null, user: null };
    }

    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
      // JWT validation has failed
      return { session: null, user: null };
    }

    return { session, user };
  };

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range' || name === 'x-supabase-api-version';
    },
  });
};

const authGuard: Handle = async ({ event, resolve }) => {
  const { session, user } = await event.locals.safeGetSession();
  event.locals.session = session;
  event.locals.user = user;

  if (!session) {
    if (['/tenantMain', '/userMain', '/adminMain'].some(path => event.url.pathname.startsWith(path))) {
      return redirect(303, '/');
    }
  } else {
    const userId = user?.id;
    let role = null;

    if (userId) {
      // Check user role
      const { data: potCust } = await event.locals.supabase
        .from('Potential Customer')
        .select('userID')
        .eq('userID', userId)
        .single();

      if (potCust) {
        role = 'customer';
      }

      const { data: manager } = await event.locals.supabase
        .from('Manager')
        .select('userID')
        .eq('userID', userId)
        .single();

      if (manager) {
        role = 'manager';
      }

      if (!role) {
        role = 'tenant';
      }
    }

    event.locals.role = role;

    // Redirect based on role
    if (event.url.pathname === '/') {
      if (role === 'customer') {
        return redirect(303, '/userMain');
      } else if (role === 'manager') {
        return redirect(303, '/adminMain');
      } else {
        return redirect(303, '/tenantMain');
      }
    }

    // Prevent role access to incorrect pages
    if (role === 'customer' && !event.url.pathname.startsWith('/userMain')) {
      return redirect(303, '/userMain');
    } else if (role === 'manager' && !event.url.pathname.startsWith('/adminMain')) {
      return redirect(303, '/adminMain');
    } else if (role === 'tenant' && !event.url.pathname.startsWith('/tenantMain')) {
      return redirect(303, '/tenantMain');
    }
  }

  return resolve(event);
};

export const handle: Handle = sequence(supabaseHandle, authGuard);
