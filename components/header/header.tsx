import {headerProps} from "@/types/headerType";
import style from "./header.module.css";
import Image from "next/image";

export default function Header({username}: headerProps) {
  return (
    <header className={style.header}>
        <Image  className={style.logo} src="/Images/VibeAndFlavorLogo.png" width={100}  height={100} alt="logo" />
        <h1>Vibe & Flavor - {username}</h1>
        <div className={style.liens}>
           <p> Qui sommes-nous ?</p>
           <p>Le concept</p>
           <p>Inscription</p>
           <p>Connexion</p>
        </div>
       
    </header>
  );
}