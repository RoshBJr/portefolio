import { useEffect, useState } from "react";
import colors from "../../data/colors.json";
import data from "../../data/data.json";
import MenuLink from "./MenuLink";
import "./NavDesktop.scss";
import Cookies from "universal-cookie";

export default function NavDesktop() {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  useEffect(() => {
    const cookies = new Cookies();
    setLang(cookies.get("lang") ?? 'fr');
  }, []);

  return (
    <div className="container-links">
      <MenuLink
        text={data[lang]["section-presentation"].titre}
        barColor={colors.Air_force_blue}
        linkSection={`#${data['fr']["section-presentation"].titre.toLowerCase()}`}
      />
      <MenuLink
        text={data[lang]["section-competence"].titre}
        barColor={colors.Air_force_blue}
        linkSection={`#${data['fr']["section-competence"].titre.toLowerCase()}`}
      />
      <MenuLink
        text={data[lang]["section-projets"].titre}
        barColor={colors.Air_force_blue}
        linkSection={`#${data['fr']["section-projets"].titre.toLowerCase()}`}
      />
      <MenuLink
        text={"Contact"}
        barColor={colors.Air_force_blue}
        linkSection="#contact"
      />

      <MenuLink
        text={data[lang]["language-switcher"].titre}
        barColor={colors.Air_force_blue}
        linkSection="#"
        langSwitcher={true}
      />
    </div>
  );
}
