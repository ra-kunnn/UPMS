import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase, session } }) => {

  depends('supabase:db:Potential Customer');

  const userId = session?.user?.id;


  if (!userId) {
    return { user: null, error: 'User not logged in' };
  }

  const { data: user, error } = await supabase
    .from('Potential Customer')
    .select('*')
    .eq('userID', userId)
    .single();


  if (error) {
    console.log('Error fetching tenant data:', error);
    return { user: null, error: error.message };
  }

  depends('supabase:db:Dorm Room');
  depends('supabase:db:Availability');

  const { data: roomData, error: roomError } = await supabase
    .from('Dorm Room')
    .select('*');

  
  const { data: availabilityData, error: availabilityError } = await supabase
    .from('Availability')
    .select('*');

   

  const { data: applicationData, applicationError } = await supabase
  .from('Application Form')
  .select('*')
  .eq('customerID', user.customerID);


  if (roomError) {
    console.error('Error fetching room data:', roomError);
    return { rooms: [], availability: availabilityData ?? [], error: roomError.message };
  }

  if (availabilityError) {
    console.error('Error fetching availability data:', availabilityError);
    return { rooms: roomData ?? [], availability: [], error: availabilityError.message };
  }

  if (applicationError) {
    console.error('Error fetching availability data:', applicationError);
    return { rooms: roomData ?? [], availability: availabilityData ?? [], application: [], error: applicationError.message };
  }

  return { rooms: roomData ?? [], availability: availabilityData ?? [], user: user ?? [], application: applicationData ?? []  };
};
