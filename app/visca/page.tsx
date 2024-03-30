import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

function GroupCard({ grup, position, points }: any) {
  return (
    <div className="min-h-28 flex bg-white p-3 rounded-md shadow-sm gap-x-4">
      <span className="self-center text-gray-300 text-lg font-semibold">
        {position}
      </span>
      <div className="self-center flex justify-between w-full gap-x-3">
        <span className="break-normal self-center text-gray-600 text-normal font-medium">
          {grup.nom}
        </span>
        <div className="flex flex-col text-center self-center">
          <span className="text-2xl font-bold text-gray-800">{points}</span>
          <span className="text-gray-400 text-xs font-medium w-[30%] text-right">
            Punts
          </span>
        </div>
      </div>
    </div>
  );
}

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const grups = await supabase
    .from("Grups")
    .select("*, dino_grup(*, Dino(bonus))")
    .then(({ data: grups }) => {
      return grups
        ?.map((grup: any) => {
          grup.points = grup.dino_grup.reduce((acc: number, dino: any) => {
            if (dino.Dino.bonus) {
              return acc + 3;
            }
            return acc + 1;
          }, 0);
          return grup;
        })
        .sort((a: any, b: any) => b.points - a.points);
    });

  return (
    <>
      <h1 className="text-2xl fancy tracking-tight text-gray-900 sm:text-4xl md:text-6xl p-6">
        Correplaces 2024
      </h1>
      <div className="flex flex-col gap-y-2 p-5 w-full">
        {grups &&
          grups.map((grup, index) => (
            <GroupCard
              key={index}
              grup={grup}
              position={index + 1}
              points={grup.points}
            />
          ))}
      </div>
    </>
  );
}
