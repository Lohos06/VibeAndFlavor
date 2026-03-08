import { createClient } from "@/lib/supabase/server.js";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

  const supabase = await createClient();

  const { searchParams } = new URL(req.url);
  const nation = searchParams.get("name");

  if (!nation) {
    return NextResponse.json({ error: "Nation manquante" });
  }

  // 🍽️ plat
  const { data: dish } = await supabase
    .from("Dishes")
    .select("*")
    .eq("Nation", nation)
    .single();

  // 🎵 musique
  const { data: music } = await supabase
    .from("Musics")
    .select("*")
    .eq("Nation", nation)
    .single();

  // 🌍 continent
  const { data: nationData } = await supabase
    .from("Nations")
    .select("Continent")
    .eq("Nation", nation)
    .single();

  return NextResponse.json({
    dish,
    music,
    continent: nationData?.Continent
  });
}