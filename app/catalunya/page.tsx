import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const { data, error } = await supabase
      .from("Dino")
      .select("codi_random, nom_dinosaure");

    if (error) {
      throw error;
    }

    const res = data.map(
      ({ codi_random, nom_dinosaure }) => `${codi_random} - ${nom_dinosaure}`
    );

    return <pre>{JSON.stringify(res)}</pre>;
  } catch (error) {
    return <pre>Error fetching data</pre>;
  }
}
