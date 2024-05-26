import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase, session } }) => {

  depends('supabase:db:Potential Customer');

  const userId = session?.user?.id;


  if (!userId) {
    return { user: null, error: 'User not logged in' };
  }

  const { data: user, error } = await supabase
    .from('Potential Customer')
    .select('customerName')
    .eq('userID', userId)
    .single();


  if (error) {
    console.log('Error fetching tenant data:', error);
    return { user: null, error: error.message };
  }

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  depends('supabase:db:Dorm Room');
  depends('supabase:db:Availability');

  const { data: roomData, error: roomError } = await supabase
    .from('Dorm Room')
    .select('*');

  
  const { data: availabilityData, error: availabilityError } = await supabase
    .from('Availability')
    .select('*');

  if (roomError) {
    console.error('Error fetching room data:', roomError);
    return { rooms: [], availability: availabilityData ?? [], error: roomError.message };
  }

  if (availabilityError) {
    console.error('Error fetching availability data:', availabilityError);
    return { rooms: roomData ?? [], availability: [], error: availabilityError.message };
  }


<<<<<<< Updated upstream
console.log(user)


  return { rooms: roomData ?? [], availability: availabilityData ?? [], user: user ?? []  };

=======



  return { rooms: roomData ?? [], availability: availabilityData ?? [], user: user ?? []  };
>>>>>>> Stashed changes
};
