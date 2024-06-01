import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {

depends('supabase:db:Manager'); //find out what this does


  const { data: roomData, error: roomError } = await supabase
    .from('Dorm Room')
    .select('*');
  

  const { data: maintenanceData, error: maintenanceError } = await supabase
    .from('Maintenance Info ')
    .select('*')
    .order('startDateOfMaintenance', { ascending: false });



  if (roomError) {
    console.log('Error fetching bills data:', roomError);
    return {  maintenance: maintenanceData ??[], rooms: [],  error: roomError.message };
  }

  if(maintenanceError){
    console.log('Error fetching bills data:', maintenanceError);
    return {  maintenance:  [], rooms: roomData ??[],  error: maintenanceError.message };
  }

  return {  rooms: roomData?? [] , maintenance: maintenanceData ?? []};
};