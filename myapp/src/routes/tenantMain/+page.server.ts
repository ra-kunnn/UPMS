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

  const { data: availabilityData, error: availabilityError } = await supabase
    .from('Availability')
    .select('*');

  const {data: visitorData, error: visitorError} = await supabase
    .from('Visitor Info')
    .select('*')
    .eq('tenantID', tenant.tenantID)
    .order('startDateOfVisit', { ascending: false });

  const {data: maintenanceData, error: maintenanceError} = await supabase
    .from('Maintenance Info')
    .select('*')
    .eq('dormNo', tenant.dormNo)
    .order('startDateOfMaintenance', { ascending: false });
    
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

  const { data: roomData, error: roomError } = await supabase
    .from('Dorm Room')
    .select('*');

    console.log(maintenanceData);
    console.log(visitorData);
  return {maintenance: maintenanceData??[], visitor: visitorData ??[] , rooms: roomData ?? [], user: tenant ?? [], bill: billData ?? [], allTenants: allTenantData ?? [], availability: availabilityData ?? []};
};
