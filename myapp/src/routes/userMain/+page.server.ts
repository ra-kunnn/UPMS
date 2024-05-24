import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase, session } }) => {

  depends('supabase:db:Potential Customer');

  const userId = session?.user?.id;


  if (!userId) {
    return { user: null, error: 'User not logged in' };
  }

  const { data: user, error } = await supabase
    .from('Potential Customer')
    .select('customerName')
    .eq('userID', userId)
    .single();


  if (error) {
    console.log('Error fetching tenant data:', error);
    return { user: null, error: error.message };
  }

  return { user: user ?? [] };
};
