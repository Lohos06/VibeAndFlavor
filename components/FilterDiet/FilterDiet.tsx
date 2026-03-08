import style from "./FilterDiet.module.css";
import { useState } from "react";

type Props = {
  onChange: (diet: string | null) => void;
};

export default function FilterDiet({ onChange }: Props) {

  const [open, setOpen] = useState(false);

  const selectDiet = (diet:string|null) => {
    onChange(diet);
    setOpen(false);
  };

  return (
    <div className={style.filterContainer}>

      <button
        className={style.filterButton}
        onClick={() => setOpen(!open)}
      >
        ⚙ Filtres
      </button>

      {open && (
        <div className={style.filterBox}>


          <div
            className={style.option}
            onClick={() => selectDiet("Végétarien")}
          >
            Végétarien
          </div>

          <div
            className={style.option}
            onClick={() => selectDiet("Viande")}
          >
            Viande
          </div>

          <div
            className={style.option}
            onClick={() => selectDiet("Viande halal")}
          >
            Viande halal
          </div>

          <div
            className={style.option}
            onClick={() => selectDiet("Poisson")}
          >
            Poisson
          </div>

        </div>
      )}

    </div>
  );
}