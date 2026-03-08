import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value
      }
    }
  );

  const { searchParams } = new URL(req.url);
  const nation = searchParams.get("name");

  if (!nation) {
    return NextResponse.json({ error: "Nation manquante" });
  }

  const { data: dish } = await supabase
    .from("Dishes")
    .select("*")
    .eq("Nation", nation)
    .single();

  const { data: music } = await supabase
    .from("Musics")
    .select("*")
    .eq("Nation", nation)
    .single();

  return NextResponse.json({
    dish,
    music
  });
}