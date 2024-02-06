import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Index() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const res = await supabase.from("Grups").select('*', { count: 'exact' })
  console.log(res)

  return <pre>{JSON.stringify(res.data, null, 2)}</pre>
}