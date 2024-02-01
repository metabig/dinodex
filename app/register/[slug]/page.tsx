import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Image from 'next/image'
import dino from '../../public/dino.jpg'

export default async function Page({ params }: { params: { slug: string } }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: dinos } = await supabase.from("Dino").select().eq("codi_random", params.slug).single();

  // return <pre>{dinos.nom_comu}, codi: {dinos.codi_random}</pre>
  return <div className='flex flex-col p-4'>
    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-6xl py-2">
      {dinos.nom_comu}
    </h1>
    <Image className="shadow-md rounded-md" src={dino.src} width={500} height={500} alt={''} />
    <h2 className="mt-2 text-sm font-bold tracking-tight text-gray-900 sm:text-2xl md:text-4xl py-2">
      Descripció
    </h2>
    <p className='text-sm text-gray-500'>
      {dinos.descripcio ? dinos.descripcio : 'Aquest dinosaure sobra, i la seva descripció també.'}
    </p>
  </div>
}