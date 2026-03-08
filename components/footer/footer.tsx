import Image from "next/image";
import Link from 'next/link'

import style from "./footer.module.css";

export default function footer() {
  return (
    <footer className={style.footer}>
       <p className={style.legalMentions}>© 2026 Vibe & Flavor — All rights reserved.</p>
       <div>
          <Image src="/Images/social/TikTokLogo.png" width={70}  height={70} alt="logo" />
          <Image src="/Images/social/InstagramLogo.png" width={70}  height={70} alt="logo" />
       </div>
    </footer>
  );
}