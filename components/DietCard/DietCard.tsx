import { useEffect, useState } from "react"
import style from "./DietCard.module.css"

type Props = {
  diet: string | null
  onCountryClick: (country: string) => void
  onClose: () => void
}

export default function DietCard({ diet, onCountryClick, onClose }: Props) {

  // liste des pays correspondant au regime choisi
  const [countries, setCountries] = useState<string[]>([])

  // quand le regime change -> on va chercher les pays via l'api
  useEffect(() => {

    // si pas de regime selectionné on ne fait rien
    if (!diet) return

    const load = async () => {

      try {

        // nettoyer le texte du regime
        const cleanDiet = diet
          .replace(/\r/g, "")
          .replace(/\n/g, "")
          .trim()

        // appel api pour recuperer les pays correspondant au regime
        const res = await fetch(
          `/api/diet?type=${encodeURIComponent(cleanDiet)}`
        )

        const data = await res.json()

        // transformer la reponse en simple tableau de noms de pays
        const list = (data.nations || []).map((n: any) => n.Nation)

        // sauver les pays dans le state
        setCountries(list)

      } catch (err) {
        console.error("erreur chargement pays regime:", err)
      }

    }

    load()

  }, [diet])


  // si aucun regime selectionné -> on n'affiche pas la carte
  if (!diet) return null

  return (

    <div className={style.card}>

      {/* bouton fermer la card */}
      <button
        className={style.closeBtn}
        onClick={onClose}
      >
        ✕
      </button>

      {/* titre avec le nom de la diet */}
      <h2 className={style.title}>🥗 {diet.toUpperCase()} 🥗</h2>

      {/* grille des pays */}
      <div className={style.grid}>

        {countries.map((country) => (

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