import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import WorldMap from "@/components/worldMap/worldMap";

export default async function Home() { 

  return (
    <>
      <Header username="Patricia"/>
      <main>
        <WorldMap/>
      </main>
      <Footer/>
    </>
  );
}