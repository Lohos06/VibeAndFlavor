"use client"

import { useState } from "react";
import Header from "@/components/header/header";
import WorldMap from "@/components/worldMap/worldMap";
import FichePays from "@/components/FichePays/FichePays";

export default function Home() {

  const [country, setCountry] = useState<string | null>(null);
  const [dish, setDish] = useState<any>(null);
  const [music, setMusic] = useState<any>(null);

  const handleCountryClick = async (countryName: string) => {

    setCountry(countryName);

    const res = await fetch(`/api/country?name=${countryName}`);
    const data = await res.json();

    setDish(data.dish);
    setMusic(data.music);
  };

  return (
    <div className="layout-wrapper">

      <Header username="Patricia" />

      <main className="main-content">

        <WorldMap onCountryClick={handleCountryClick} />

        <FichePays
          nation={country}
          dish={dish}
          music={music}
        />

      </main>

    </div>
  );
}