import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import style from "./concept.module.css";


export default function Nations() {
  return (
        <>  
       
        <Header username="Patricia"/>
        <main className={style.contenu}>  
            <a className={style.button} href="/"> ← retourner vers la page d'acceuil</a>
     
            <div className={style.description}>
                <h2>Le Concept de notre site </h2>
                <p>Embarquez pour un voyage sensoriel unique. Notre mission ? Vous faire découvrir l'âme d'un pays à travers son Histoire, les saveurs de sa gastronomie et le rythme de sa musique.</p>
                <p>Explorez notre carte interactive : un simple clic sur un pays vous ouvre les portes d'un dossier complet regroupant anecdotes, recettes authentiques et pépites musicales.</p>
                  
               <h2>Notre équipe :</h2> 
               <p>Clara Marchal - Yasmine Meftah - Lorenzo L'Hostis</p>
            </div>

            <div>
                <ul className={style.sommaire}>
                    <li>Recette typique de chaque Pays avec : 
                        <ul>
                            <li>Son histoire</li>
                            <li>Une bonne adresse</li>
                            <li>Son prix</li>
                            <li>une aide pour les personnes avec un régime alimentaire</li>
                        </ul>
                </li>
                </ul>
                
                <ul className={style.sommaire}>
                    <li>Musique typique de chaque Pays avec :
                        <ul>
                            <li>Son histoire</li>
                            <li>son lien </li>
                            <li>Son ou ses auteur(s)</li>
                        </ul>
                    </li>
                </ul>
            </div>
      

        
        </main>
        <Footer/>
        </>
  );
}