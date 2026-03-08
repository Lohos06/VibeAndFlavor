import style from "./FilterContinent.module.css";

type Props = {
  onChange: (continent: string | null) => void;
};

export default function FilterContinent({ onChange }: Props) {
  return (
    <div className={style.filterBox}>

      {/*  titre du bloc filtre */}
      <b>Continent</b>

      {/*  filtre europe */}
      <label>
        <input type="radio" name="continent" onChange={() => onChange("Europe")} />
        Europe
      </label>

      {/*  filtre asie */}
      <label>
        <input type="radio" name="continent" onChange={() => onChange("Asia")} />
        Asie
      </label>

      {/*  filtre afrique */}
      <label>
        <input type="radio" name="continent" onChange={() => onChange("Africa")} />
        Afrique
      </label>

      {/* filtre amerique nord */}
      <label>
        <input type="radio" name="continent" onChange={() => onChange("North America")} />
        Amérique du Nord
      </label>

      {/* filtre amerique sud */}
      <label>
        <input type="radio" name="continent" onChange={() => onChange("South America")} />
        Amérique du Sud
      </label>

      {/* filtre oceanie */}
      <label>
        <input type="radio" name="continent" onChange={() => onChange("Oceania")} />
        Océanie
      </label>

      {/*bouton reset pour enlever le filtre */}
      <button
        className={style.resetBtn}
        onClick={() => onChange(null)}
      >
        ✕ Reset
      </button>

    </div>
  );
}