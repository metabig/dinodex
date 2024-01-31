import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Page({ params }: { params: { slug: string } }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: dinos } = await supabase.from("Dino").select().eq("codi_random", params.slug).single();

  return <pre>{dinos.nom_comu}, codi: {dinos.codi_random}</pre>
}