import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {

depends('supabase:db:Manager'); //find out what this does

  const { data: manager, error } = await supabase
    .from('Manager')
    .select('managerName, managerEmail');

  const { data: billData, error: billError } = await supabase
    .from('Tenant Bill')
    .select('*')
    .order('dateIssued', { ascending: false });

  const {data: allTenantData, error: allTenantDataError} = await supabase
    .from('Tenant')
    .select('*');

  const {data: visitorData, error: visitorError} = await supabase
    .from('Visitor Info')
    .select('*')
    .order('startDateOfVisit', { ascending: false });

  const {data: maintenanceData, error: maintenanceError} = await supabase
    .from('Maintenance Info')
    .select('*')
    .order('startDateOfMaintenance', { ascending: false });

  const { data: roomData, error: roomError } = await supabase
    .from('Dorm Room')
    .select('*');

  
  if (error) {
    console.log('Error fetching tenant data:', error);
    return {rooms: roomData ?? [], user: null, bills: billData ?? [], allTenants: allTenantData ?? [], visitor: visitorData ?? [], maintenance: maintenanceData ?? [], error: error.message };
  }

  if (billError) {
    console.log('Error fetching bills data:', billError);
    return {rooms: roomData ?? [], user: manager ?? null, bills: [], allTenants: allTenantData ?? [], visitor: visitorData ?? [], maintenance: maintenanceData ?? [], error: billError.message };
  }

  if(allTenantDataError){``
    console.log('Error fetching tenant data:', allTenantDataError);
    return {rooms: roomData ?? [], user: manager ?? null, bills: billData ?? [], allTenants: [], visitor: visitorData ?? [], maintenance: maintenanceData ?? [], error: allTenantDataError.message };
  }

  if(visitorError){
    console.log('Error fetching visitor data:');
    return {rooms: roomData ?? [], user: manager ?? null, bills: billData ?? [], allTenants: allTenantData ?? [] , visitor: [], maintenance: maintenanceData ?? [], error: visitorError.message}
  }

  if(maintenanceError){
    console.log('Error fetching maintenance data:');
    return {rooms: roomData ?? [], user: manager ?? null, bills: billData ?? [], allTenants: allTenantData ?? [], visitor: visitorData ?? [], maintenance: [], error: maintenanceError.message}
  }

  if(roomError){
    console.log('Error fetching room data');
    return {rooms: [], user: manager ?? null, bills: billData ?? [], allTenants: allTenantData ?? [], visitor: visitorData ?? [], maintenance: maintenanceData ?? [], error: roomError.message}
  }

  return { rooms: roomData ?? [], user: manager ?? [], bill: billData ?? [], allTenants: allTenantData ?? [], visitor: visitorData ?? [], maintenance: maintenanceData ?? [] };

};