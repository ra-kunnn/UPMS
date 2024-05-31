import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {

depends('supabase:db:Manager'); //find out what this does


  const { data: roomData, error: roomError } = await supabase
    .from('Dorm Room')
    .select('*');
  

  const { data: billData, error: billError } = await supabase
    .from('Tenant Bill')
    .select('*')
    .order('dateIssued', { ascending: false });

  const {data: allTenantData, error: allTenantDataError} = await supabase
    .from('Tenant')
    .select('*');

  if (roomError) {
    console.log('Error fetching bills data:', roomError);
    return {  bills: billData ??[], rooms: [],  error: billError.message };
  }

  if(billError){
    console.log('Error fetching bills data:', billError);
    return {  bills:  [], rooms: roomData ??[],  error: billError.message };
  }

  return {  rooms: roomData?? [] , bill: billData ?? [], tenants: allTenantData ?? []};
};