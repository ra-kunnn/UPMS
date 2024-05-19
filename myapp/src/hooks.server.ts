import { createServerClient } from '@supabase/ssr';
import { type Handle, redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

const supabase: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
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

  event.locals.safeGetSession = async () => {
    const { data: { session } } = await event.locals.supabase.auth.getSession();
    if (!session) return { session: null, user: null };

    const { data: { user }, error } = await event.locals.supabase.auth.getUser();
    if (error) return { session: null, user: null };

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

  if (!event.locals.session && (event.url.pathname.startsWith('/tenantMain') || event.url.pathname.startsWith('/userMain') || event.url.pathname.startsWith('/adminMain'))) {
    return redirect(303, '/');
  }

  if (event.locals.session && event.url.pathname === '/') {
    const { data: potCust } = await event.locals.supabase
      .from('Potential Customer')
      .select('customerEmail')
      .eq('customerEmail', user.email)
      .single();
    if (potCust) return redirect(303, '/userMain');

    const { data: manager } = await event.locals.supabase
      .from('Manager')
      .select('managerEmail')
      .eq('managerEmail', user.email)
      .single();
    if (manager) return redirect(303, '/adminMain');

    return redirect(303, '/tenantMain');
  }

  return resolve(event);
};

export const handle: Handle = sequence(supabase, authGuard);
