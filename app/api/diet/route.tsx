import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// route api pour recuperer les pays selon un regime alimentaire
//  filtrer par type de regime

export async function GET(req: Request) {

  // creation du client supabase
  const supabase = await createClient();

  // recuperer les parametres dans l'url
  const { searchParams } = new URL(req.url);

  // type de regime alimentaire (ex: vegetarien, poisson, etc)
  const type = searchParams.get("type");

  try {

    // requete de base -> table dishes
    let query = supabase
      .from("Dishes")
      .select("Nation,Diet");

    // si un type de regime est demandé -> filtrer
    if (type) {
      query = query.eq("Diet", type);
    }

    // execution de la requete
    const { data, error } = await query;

    // si erreur -> on renvoie une erreur serveur
    if (error) {
      throw error;
    }

    // renvoyer la liste des pays correspondant
    return NextResponse.json({
      nations: data ?? []
    });

  } catch (err: any) {

    // gestion erreur globale
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );

  }

}