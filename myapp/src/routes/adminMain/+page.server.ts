import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {

depends('supabase:db:Manager'); //find out what this does

const { data: manager, error } = await supabase.from('Manager').select('managerEmail, managerName');

  if (error){
  console.log('error loll');
  }
  console.log(manager);
  return { user: manager ?? [] };
};