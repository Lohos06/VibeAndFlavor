import { useEffect, useState } from "react"
import style from "./ContinentCard.module.css"

type Props = {
  continent: string | null
  onCountryClick: (country: string) => void
}

export default function ContinentCard({ continent, onCountryClick }: Props) {

  // state pour stocker les pays du continent selectionné
  const [countries, setCountries] = useState<string[]>([])

  // quand le continent change -> on charge les pays via l'api
  useEffect(() => {

    // si pas de continent selectionné on ne fait rien
    if (!continent) return

    const load = async () => {

      try {

        // evite probleme espace ou retour ligne
        const cleanContinent = continent
          .replace(/\r/g, "")
          .replace(/\n/g, "")
          .trim()

        // appel api pour recuperer les pays du continent
        const res = await fetch(
          `/api/nations?continent=${encodeURIComponent(cleanContinent)}`
        )

        const data = await res.json()

        // transformer la reponse en simple liste de pays
        const list = (data.nations || []).map((n: any) => n.Nation)

        // sauver les pays dans le state
        setCountries(list)

      } catch (err) {
        console.error("erreur chargement pays:", err)
      }

    }

    load()

  }, [continent])


  // si aucun continent selectionné -> on affiche rien
  if (!continent) return null

  return (

    <div className={style.card}>

      {/* titre avec nom du continent */}
      <h2 className={style.title}>🏕️{continent.toUpperCase()}🏕️</h2>

      {/* grille avec tous les pays */}
      <div className={style.grid}>

        {countries.map((country) => (

          // chaque pays est cliquable -> centre la map dessus
          <div
            key={country}
            className={style.country}
            onClick={() => onCountryClick(country)}
          >
            • {country}
          </div>

        ))}

      </div>

    </div>

  )

}