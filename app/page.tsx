"use client"

import { useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import WorldMap from "@/components/worldMap/worldMap";
import FichePays from "@/components/FichePays/FichePays";
import FilterContinent from "@/components/FilterContinent/FilterContinent";

export default function Home() {

  const [country, setCountry] = useState<string | null>(null);
  const [dish, setDish] = useState<any>(null);
  const [music, setMusic] = useState<any>(null);
  const [continent, setContinent] = useState<string | null>(null);
  const [continentFilter, setContinentFilter] = useState<string | null>(null);

  const handleCountryClick = async (
    countryName: string,
    pos: { x: number; y: number }
  ) => {

    setCountry(countryName);

    const res = await fetch(`/api/country?name=${countryName}`);
    const data = await res.json();

    console.log("API RESULT :", data);

    setDish(data.dish);
    setMusic(data.music);
    setContinent(data.continent);
  };

  const closeCard = () => {
    setCountry(null);
    setDish(null);
    setMusic(null);
    setContinent(null);
  };

  // 🔵 FILTRE CONTINENT
  const highlightContinent = (continent: string) => {

    const countries = document.querySelectorAll(".Nation");

    countries.forEach((country) => {

      const el = country as HTMLElement;

      if (el.dataset.continent === continent) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }

    });

  };

  return (
    <div className="layout-wrapper">

      <Header username="Patricia" />

      <main className="main-content">

        <div className="mapContainer">

          {/* FILTRE CONTINENT */}
          <FilterContinent onChange={setContinentFilter} />

          <WorldMap
      onCountryClick={handleCountryClick}
      continentFilter={continentFilter}
    />

          {/* FICHE CENTRÉE */}
          {dish && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 20
              }}
            >
              <FichePays
                nation={country}
                continent={continent}
                dish={dish}
                music={music}
                onClose={closeCard}
              />
            </div>
          )}

        </div>

      </main>

      <Footer />

    </div>
  );
}