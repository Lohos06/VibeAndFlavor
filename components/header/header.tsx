import {headerProps} from "@/types/headerType";
import style from "./header.module.css";
import Image from "next/image";

export default function Header({username}: headerProps) {
  return (
    <header className={style.header}>
       <div className={style.title}>
         <Image  className={style.logo} src="/Images/VibeAndFlavorLogo.png" width={100}  height={100} alt="logo" />
        <h1>Vibe & Flavor - {username}</h1>
       </div>
       
        <nav className={style.liens}>
           <a> Qui sommes-nous ?</a>
           <a>Le concept</a>
        </nav>
    </header>
  );
}