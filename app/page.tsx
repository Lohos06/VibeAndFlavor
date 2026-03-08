"use client"

import { useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import WorldMap from "@/components/worldMap/worldMap";
import FichePays from "@/components/FichePays/FichePays";
import FilterContinent from "@/components/FilterContinent/FilterContinent";
import ContinentCard from "@/components/ContinentCard/ContinentCard";
import FilterDiet from "@/components/FilterDiet/FilterDiet";
import DietCard from "@/components/DietCard/DietCard";

export default function Home() {

  // pays selectionné sur la carte
  const [country, setCountry] = useState<string | null>(null);

  // données du plat du pays
  const [dish, setDish] = useState<any>(null);

  // musique associée au pays
  const [music, setMusic] = useState<any>(null);

  // continent du pays selectionné
  const [continent, setContinent] = useState<string | null>(null);

  // filtre continent choisi par l'utilisateur
  const [continentFilter, setContinentFilter] = useState<string | null>(null);

  // filtre regime alimentaire
  const [dietFilter, setDietFilter] = useState<string | null>(null);


  // quand on clique sur un pays dans la carte
  const handleCountryClick = async (
    countryName: string,
    pos?: { x: number; y: number }
  ) => {

    // sauver le pays selectionné
    setCountry(countryName);

    // appel api pour recuperer les infos du pays
    const res = await fetch(`/api/country?name=${encodeURIComponent(countryName)}`);
    const data = await res.json();

    // sauvegarder les données dans les states
    setDish(data.dish);
    setMusic(data.music);
    setContinent(data.continent);
  };


  // fermer la fiche pays
  const closeCard = () => {
    setCountry(null);
    setDish(null);
    setMusic(null);
    setContinent(null);
  };


  return (
    <div className="layout-wrapper">

      {/* header du site */}
      <Header username="Patricia" />

      <main className="main-content">

        {/* zone principale avec la carte */}
        <div className="mapContainer">

          {/* filtre par continent */}
          <FilterContinent onChange={setContinentFilter} />

          {/* filtre par regime alimentaire */}
          <FilterDiet onChange={setDietFilter} />

          {/* carte du monde interactive */}
          <WorldMap
            onCountryClick={handleCountryClick}
            continentFilter={continentFilter}
            selectedCountry={country}
          />

          {/* afficher liste des pays du continent selectionné */}
          {continentFilter && !country && (
            <ContinentCard
              continent={continentFilter}
              onCountryClick={(c) => handleCountryClick(c)}
            />
          )}

          {/* afficher liste des pays selon regime alimentaire */}
          {dietFilter && !country && (
            <DietCard
            diet={dietFilter}
            onCountryClick={(c) => handleCountryClick(c)}
            onClose={() => setDietFilter(null)}
          />
          )}

          {/* fiche detail du pays */}
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

      {/* footer du site */}
      <Footer />

    </div>
  );
}