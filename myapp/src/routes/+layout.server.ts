import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { supabase } }) => {
  const { data: session, error } = await supabase.auth.getSession();
  if (error) {
    console.error('Error fetching session:', error);
  }

  return {
    session,
  };
};
