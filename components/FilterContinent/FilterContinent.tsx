import style from "./FilterContinent.module.css";

type Props = {
onChange: (continent: string) => void;
};

export default function FilterContinent({ onChange }: Props) {

return (
<div className={style.filterBox}>

<b>Continent</b>

<label>
<input
type="radio"
name="continent"
onChange={() => onChange("Europe")}
/>
Europe
</label>

<label>
<input
type="radio"
name="continent"
onChange={() => onChange("Asia")}
/>
Asie
</label>

<label>
<input
type="radio"
name="continent"
onChange={() => onChange("Africa")}
/>
Afrique
</label>

<label>
<input
type="radio"
name="continent"
onChange={() => onChange("North America")}
/>
Amérique
</label>

<label>
<input
type="radio"
name="continent"
onChange={() => onChange("Oceania")}
/>
Océanie
</label>

</div>
);
}