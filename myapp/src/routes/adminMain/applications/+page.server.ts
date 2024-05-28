import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {

depends('supabase:db:Manager'); //find out what this does


  const {data: userData, error: userError} = await supabase
    .from('Potential Customer')
    .select('*');

  const {data: applicationData, error: applicationError} = await supabase
    .from('Application Form')
    .select('*')
    .order('startOfTenancy', { ascending: true });
  
  const { data: roomData, error: roomError } = await supabase
    .from('Dorm Room')
    .select('*');
  if(userError){``
    console.log('Error fetching tenant data:', userError);
    return {user: [], application: applicationData ?? [], error: userError.message };
  }

  if(applicationError){
    console.log('Error fetching visitor data:');
    return { user: userData ?? [] , application: [], error: applicationError.message}
  }


  console.log(applicationData);
  return { rooms: roomData ?? [],  user: userData ?? [], application: applicationData ?? [] };

};