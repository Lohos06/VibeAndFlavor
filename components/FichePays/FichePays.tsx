import style from "./FichePays.module.css";

type FichePaysProps = { 
  nation: string | null;
  continent: string | null;
  dish: any;
  music: any;
  onClose: () => void;
};

export default function FichePays({ nation, continent, dish, music, onClose }: FichePaysProps) {

  if (!dish) return null;

  return (
    <div className={style.countryCard}>

      <button className={style.closeBtn} onClick={onClose}>
        ✕
      </button>

      <h2 className={style.countryTitle}>🌏{nation}🌏</h2>
      <p className={style.continent}>{continent}</p>

      <div className={style.content}>

        <div className={style.section}>
          <h3 className={style.sectionTitle}> PLAT</h3>
          <h4 className={style.dishName}>{dish.Nom}</h4>

          <ul>
            <li><b>Composé de :</b> {dish.Ingredients}</li>
            <li>
            <b>Recette :</b>{" "}
            <a href={dish.link} target="_blank" rel="noopener noreferrer">
            voir la recette
            </a>
            </li>
            <li><b>Adresse connu :</b> {dish.GoodAdress}</li>
            <li><b>Histoire :</b> {dish.History}</li>
            <li><b>Inventé en :</b> {dish.CreationDate}</li>
            <li><b>Budget :</b> {dish.Price} €</li>
            <li><b>Régime :</b> {dish.Diet}</li>
          </ul>
        </div>

        <div className={style.section}>
          <h3 className={style.sectionTitle}>MUSIQUE</h3>
          <h4 className={style.dishName}>{music?.Name}</h4>

          <ul>
            <li><b>Singer :</b> {music?.Singer}</li>
            <li><b>Style :</b> {music?.Style}</li>
            <li>
            <b>Lien :</b>{" "}
            <a href={music?.link} target="_blank" rel="noopener noreferrer">
            écouter
            </a>
            </li>
            <li><b>Histoire :</b> {music?.History}</li>
          </ul>
        </div>

      </div>

    </div>
  );
}