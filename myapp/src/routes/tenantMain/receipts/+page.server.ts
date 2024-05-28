import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase, session } }) => {

  depends('supabase:db:Tenant');

  const userId = session?.user?.id;

  if (!userId) {
    return { user: null, error: 'User not logged in' };
  }

  const { data: tenant, error } = await supabase
    .from('Tenant')
    .select('*')
    .eq('userID', userId)
    .single();

  const { data: billData, error: billError } = await supabase
    .from('Tenant Bill')
    .select('*')
    .eq('dormNo', tenant.dormNo)
    .order('dateIssued', { ascending: false });

  const {data: allTenantData, error: allTenantDataError} = await supabase
    .from('Tenant')
    .select('*');

  if (error) {
    console.log('Error fetching tenant data:', error);
    return { user: null, bills: billData ?? [], allTenants: allTenantData ?? [], error: error.message };
  }

  if (billError) {
    console.log('Error fetching bills data:', billError);
    return { user: tenant ?? null, bills: [], allTenants: allTenantData ?? [], error: billError.message };
  }

  if(allTenantDataError){
    console.log('Error fetching bills data:', allTenantDataError);
    return { user: tenant ?? null, bills: billData ?? [], allTenants: [], error: billError.message };
  }

  return {  bill: billData ?? []};
};
