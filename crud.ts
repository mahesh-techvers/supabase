import { supabase } from './client';

export async function getUser(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}

export async function createUser(payload: Record<string, unknown>) {
  const { data, error } = await supabase
    .from('users')
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data;
}
