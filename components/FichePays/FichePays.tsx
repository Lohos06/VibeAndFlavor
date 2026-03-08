type FichePaysProps = {
  nation: string | null;
  dish: any;
  music: any;
};

export default function FichePays({ nation, dish, music }: FichePaysProps) {

  if (!dish) return null;

  return (
    <div className="card">

      <h2>{nation}</h2>

      <h3>Plat : {dish.Nom}</h3>
      <p>{dish.Ingredients}</p>
      <p>{dish.GoodAdress}</p>
      <p>{dish.History}</p>
      <p>{dish.CreationDate}</p>
      <p>{dish.Price}</p>
      <p>{dish.Diet}</p>
      <p>{dish.link}</p>

      <h3>Musique : {music.Name}</h3>
      <p>{music.Style}</p>
      <p>{music.Singer}</p>
      <p>{music.History}</p>
      <p>{music.link}</p>

    </div>
  );
}