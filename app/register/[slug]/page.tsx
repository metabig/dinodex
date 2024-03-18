import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";
import dinos from "../../public/dino.jpg";
import Xokas from "../../public/ELXOKAS.jpg";
import Modal from "./modal";
import { notFound } from "next/navigation";

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
        {dino.nom_comu === "ElXokas" ? (
          <Image
            className="main-mask"
            src={Xokas.src}
            width={500}
            height={500}
            alt={""}
            priority
          />
        ) : (
          <Image
            className="main-mask"
            src={dinos.src}
            alt={""}
            priority
            height={1500}
            width={500}
          />
        )}
        <div className="main-mask bg-white px-5 pb-4 mt-5">
          <h2 className="mt-2 text-sm font-bold tracking-tight text-gray-900 sm:text-2xl md:text-4xl py-2">
            Descripció
          </h2>
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
