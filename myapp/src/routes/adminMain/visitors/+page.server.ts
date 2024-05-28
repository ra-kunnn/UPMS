import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {

depends('supabase:db:Manager'); //find out what this does


  const {data: allTenantData, error: allTenantDataError} = await supabase
    .from('Tenant')
    .select('*');

  const {data: visitorData, error: visitorError} = await supabase
    .from('Visitor Info')
    .select('*')
    .order('startDateOfVisit', { ascending: false });

  if(allTenantDataError){``
    console.log('Error fetching tenant data:', allTenantDataError);
    return {allTenants: [], visitor: visitorData ?? [], error: allTenantDataError.message };
  }

  if(visitorError){
    console.log('Error fetching visitor data:');
    return { allTenants: allTenantData ?? [] , visitor: [], error: visitorError.message}
  }



  console.log(visitorData);
  return {  allTenants: allTenantData ?? [], visitor: visitorData ?? [] };

};