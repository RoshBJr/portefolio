import "./MenuContainer.scss";
import MenuLink from "./UI/MenuLink";
import colors from "../data/colors.json";
import data from "../data/data.json";
import BurgerMenu from "./UI/BurgerMenu";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

interface UIProps {
  animBurger: boolean;
  setAnimBurger: Function;
}

export default function MenuContainer({ animBurger, setAnimBurger }: UIProps) {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  useEffect(() => {
    const cookies = new Cookies();
    setLang(cookies.get("lang") ?? 'fr');
  }, []);

  return (
    <div className="menu-list hide-menu">
      <MenuLink
        animBurger={animBurger}
        setAnimBurger={setAnimBurger}
        text={data[lang]["section-presentation"].titre}
        barColor={colors.Air_force_blue}
        linkSection={`#${data['fr']["section-presentation"].titre.toLowerCase()}`}
      />
      <MenuLink
        animBurger={animBurger}
        setAnimBurger={setAnimBurger}
        text={data[lang]["section-competence"].titre}
        barColor={colors.Air_force_blue}
        linkSection={`#${data['fr']["section-competence"].titre.toLowerCase()}`}
      />
      <MenuLink
        animBurger={animBurger}
        setAnimBurger={setAnimBurger}
        text={data[lang]["section-projets"].titre}
        barColor={colors.Air_force_blue}
        linkSection={`#${data['fr']["section-projets"].titre.toLowerCase()}`}
      />
      <MenuLink
        animBurger={animBurger}
        setAnimBurger={setAnimBurger}
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
