import Header from "@/components/header/header";
import WorldMap from "@/components/worldMap/worldMap";

export default async function Home() { 

  return (
    <div className="layout-wrapper">
      <Header username="Patricia" />
      <main className="main-content">
        <WorldMap />
      </main>
    </div>
  );
}