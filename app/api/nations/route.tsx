import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: Request) {

  const supabase = await createClient();

  const { searchParams } = new URL(req.url);
  const continent = searchParams.get("continent");

  let query = supabase
    .from("Nations")
    .select("Nation, Continent"); // ✅ ajouter Continent

  if (continent) {
    query = query.eq("Continent", continent);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    nations: data ?? []
  });
}