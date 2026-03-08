import { createClient } from "@/lib/supabase/server.js";
import { Suspense } from "react";

async function NationsData() {
  const supabase = await createClient();
  const { data: Nations } = await supabase.from("Dishes").select();

  return <pre>{JSON.stringify(Nations, null, 2)}</pre>;
}

export default function Nations() {
  return (
    <Suspense fallback={<div>Loading nations...</div>}>
      <NationsData />
    </Suspense>
  );
}