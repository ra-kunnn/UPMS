import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase, session } }) => {

  depends('supabase:db:Tenant');

  const userId = session?.user?.id;

  if (!userId) {
    return { user: null, error: 'User not logged in' };
  }

  const { data: tenant, error } = await supabase
    .from('Tenant')
    .select('tenantName, tenantEmail')
    .eq('userID', userId)
    .single();

  if (error) {
    console.log('Error fetching tenant data:', error);
    return { user: null, error: error.message };
  }

  return { user: tenant ?? [] };
};
