import { createClient } from "@/lib/supabase/server.js";
import { NextResponse } from "next/server";

export async function GET() {

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("Nations")
    .select("Nation, Continent");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    nations: data
  });

}