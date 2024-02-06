"use server"

import { createClient } from '@/utils/supabase/server';
import { cookies } from "next/headers";

export async function getDino(slug: string) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  return await supabase.from("Dino").select().eq("codi_random", slug).single()
}

export async function addDinoToGroup(group: string, dinoCode: string) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  return await supabase.from("dino_grup").insert([{ group: group, code: dinoCode }])
}
