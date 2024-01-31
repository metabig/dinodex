import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Index() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: grups } = await supabase.from("Grups").select();

  return <pre>{JSON.stringify(grups, null, 2)}</pre>
}