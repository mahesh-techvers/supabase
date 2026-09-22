import { useQuery } from '@tanstack/react-query';
import { supabase } from './client';

export function useUser(userId?: string) {
  return useQuery({
    queryKey: ['user', userId],
    enabled: Boolean(userId),
    queryFn: async () => {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId!)
        .single();

      if (error) throw error;
      return data;
    },
  });
}
