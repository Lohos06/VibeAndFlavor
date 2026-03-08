import { createClient } from "@/lib/supabase/server.js";
import { NextResponse } from "next/server";

// route api pour recuperer toutes les infos d'un pays
// on renvoie le plat, la musique et le continent

export async function GET(req: Request) {

  // creation du client supabase
  const supabase = await createClient();

  // recuperer les parametres dans l'url
  const { searchParams } = new URL(req.url);

  // nom du pays demandé
  const nation = searchParams.get("name");

  // si aucun pays fourni -> erreur
  if (!nation) {
    return NextResponse.json({ error: "Nation manquante" });
  }

  // recuperer le plat traditionnel du pays
  const { data: dish } = await supabase
    .from("Dishes")
    .select("*")
    .eq("Nation", nation)
    .single();

  // recuperer la musique du pays
  const { data: music } = await supabase
    .from("Musics")
    .select("*")
    .eq("Nation", nation)
    .single();

  // recuperer le continent du pays
  const { data: nationData } = await supabase
    .from("Nations")
    .select("Continent")
    .eq("Nation", nation)
    .single();

  // renvoyer toutes les infos au front
  return NextResponse.json({
    dish,
    music,
    continent: nationData?.Continent
  });
}