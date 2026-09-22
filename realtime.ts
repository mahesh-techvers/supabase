import { supabase } from './client';

export function subscribeToMessages(onChange: (payload: unknown) => void) {
  const channel = supabase
    .channel('messages')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'messages' },
      onChange,
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}
