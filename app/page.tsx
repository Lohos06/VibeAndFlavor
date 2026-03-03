import Header from "@/components/header/header";
import WorldMap from "@/components/worldMap/worldMap";

export default function Home() {
  return (
    <>
    <Header username="Pedro" />
    <main>
    <WorldMap/>
    </main>
    </>
  );
}