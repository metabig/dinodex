import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";
import Modal from "./modal";
import { notFound } from "next/navigation";
import getDinoImg from "./images";

export default async function Page({ params }: { params: { slug: string } }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: dino } = await supabase
    .from("Dino")
    .select()
    .eq("codi_random", params.slug)
    .single();
  const { data: grups } = await supabase.from("Grups").select();

  if (!dino) return notFound();

  return (
    <>
      <Modal grups={grups} dino={dino} />
      <div className="flex flex-col p-4">
        <h1 className="text-3xl tracking-tight text-gray-900 py-2 fancy">
          {dino.nom_dinosaure}
        </h1>
        <Image
          className="main-mask"
          src={await getDinoImg(dino.codi_random)}
          alt={""}
          priority
          height={1500}
          width={500}
        />
        <div className="main-mask bg-white px-5 py-4 mt-5">
          <p className="text-sm text-gray-500">
            {dino.descripcio
              ? dino.descripcio
              : "Aquest dinoaure sobra, i la seva descripció també."}
          </p>
        </div>
      </div>
    </>
  );
}
