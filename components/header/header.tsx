import {headerProps} from "@/types/headerType";
import style from "./header.module.css";

export default function Header({username}: headerProps) {
  return (
    <header className={style.header}>
        <h1>VibeAndFlavor</h1>
        <h2>{username}</h2>
    </header>
  );
}