import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {

depends('supabase:db:Manager'); //find out what this does

  

  const {data: allTenantData, error: allTenantDataError} = await supabase
    .from('Tenant')
    .select('*');

 

  const { data: roomData, error: roomError } = await supabase
    .from('Dorm Room')
    .select('*');
  

  const { data: availabilityData, error: availabilityError } = await supabase
    .from('Availability')
    .select('*');

  if(allTenantDataError){``
    console.log('Error fetching tenant data:', allTenantDataError);
    return {rooms: roomData ?? [],  allTenants: [], error: allTenantDataError.message };
  }

  

  if(roomError){
    console.log('Error fetching room data');
    return {rooms: [],  allTenants: allTenantData ?? [], error: roomError.message}
  }

  return { rooms: roomData ?? [],  allTenants: allTenantData ?? [], availability: availabilityData ?? [] };

};