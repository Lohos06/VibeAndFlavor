import Image from "next/image";
import Link from 'next/link'

import {headerProps} from "@/types/headerType";
import style from "./header.module.css";

export default function Header({username}: headerProps) {
  return (
    <header className={style.header}>
       <div className={style.title}>
         <Image className={style.logo} src="/Images/VibeAndFlavorLogo.png" width={100}  height={100} alt="Vibe and Flavor logo" />
        <h1>Vibe & Flavor - {username}</h1>
       </div>
       
        <nav className={style.liens}>
           <Link href="/concept" className={style.links}>Le concept</Link>
        </nav>
    </header>
  );
}