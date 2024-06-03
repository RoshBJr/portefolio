import "./Projet.scss";
import Cookies from "universal-cookie";
import BoiteProjet from "./UI/BoiteProjet";
import data from "../data/data.json";
import TitreSection from "./UI/TitreSection";
import * as Icons from "./UI/Icons";
import { useRef, useState, useEffect } from "react";

export default function Projet() {
  const [isVisible, setVisible] = useState(false);
  const [lang, setLang] = useState<'fr'| 'en'>('fr');
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cookies = new Cookies();
    setLang(cookies.get("lang") ?? 'fr');
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        if (domRef.current) observer.unobserve(domRef.current);
      }
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`container-projet ${isVisible ? "is-visible" : ""}`}>
      <div id="projets"></div>
      <TitreSection titre={data[lang]["section-projets"].titre} />

      <BoiteProjet
        titre={data[lang]["section-projets"].projet1.titre}
        desc={data[lang]["section-projets"].projet1.desc}
        logos={[
          <Icons.ReactIcon />,
          <Icons.HtmlIcon />,
          <Icons.NextjsIcon />,
          <Icons.TsIcon />,
          <Icons.FbIcon />,
          <Icons.SanityIcon />,
          <Icons.TailwindIcon />,
        ]}
        img={data[lang]["section-projets"].projet1.img}
        projectSrc={data[lang]["section-projets"].projet1.liengithub}
        projectBuild={data[lang]["section-projets"].projet1.lienprojet}
      />

      <BoiteProjet
        titre={data[lang]["section-projets"].projet7.titre}
        desc={data[lang]["section-projets"].projet7.desc}
        logos={[
          <Icons.ReactIcon />,
          <Icons.HtmlIcon />,
          <Icons.SassIcon />,
          <Icons.JsIcon />,
          <Icons.FbIcon />,
        ]}
        img={data[lang]["section-projets"].projet7.img}
        projectSrc={data[lang]["section-projets"].projet7.liengithub}
        projectBuild={data[lang]["section-projets"].projet7.lienprojet}
      />

      <BoiteProjet
        titre={data[lang]["section-projets"].projet4.titre}
        desc={data[lang]["section-projets"].projet4.desc}
        logos={[
          <Icons.ReactIcon />,
          <Icons.HtmlIcon />,
          <Icons.SassIcon />,
          <Icons.TsIcon />,
        ]}
        img={data[lang]["section-projets"].projet4.img}
        projectSrc={data[lang]["section-projets"].projet4.liengithub}
        projectBuild={data[lang]["section-projets"].projet4.lienprojet}
      />

      <BoiteProjet
        titre={data[lang]["section-projets"].projet6.titre}
        desc={data[lang]["section-projets"].projet6.desc}
        logos={[
          <Icons.ReactIcon />,
          <Icons.HtmlIcon />,
          <Icons.SassIcon />,
          <Icons.JsIcon />,
          <Icons.FbIcon />,
        ]}
        img={data[lang]["section-projets"].projet6.img}
        projectSrc={data[lang]["section-projets"].projet6.liengithub}
        projectBuild={data[lang]["section-projets"].projet6.lienprojet}
      />

      <BoiteProjet
        titre={data[lang]["section-projets"].projet5.titre}
        desc={data[lang]["section-projets"].projet5.desc}
        logos={[<Icons.CSharpIcon />, <Icons.UnityIcon />]}
        img={data[lang]["section-projets"].projet5.img}
        projectSrc={data[lang]["section-projets"].projet5.liengithub}
        projectBuild={data[lang]["section-projets"].projet5.lienprojet}
      />
      <BoiteProjet
        titre={data[lang]["section-projets"].projet2.titre}
        desc={data[lang]["section-projets"].projet2.desc}
        logos={[
          <Icons.AndStudioIcon />,
          <Icons.KotlinIcon />,
          <Icons.XmlIcon />,
        ]}
        img={data[lang]["section-projets"].projet2.img}
        projectSrc={data[lang]["section-projets"].projet2.liengithub}
        projectBuild={data[lang]["section-projets"].projet2.lienprojet}
      />

      <BoiteProjet
        titre={data[lang]["section-projets"].projet3.titre}
        desc={data[lang]["section-projets"].projet3.desc}
        logos={[
          <Icons.AndStudioIcon />,
          <Icons.KotlinIcon />,
          <Icons.XmlIcon />,
        ]}
        img={data[lang]["section-projets"].projet3.img}
        projectSrc={data[lang]["section-projets"].projet3.liengithub}
        projectBuild={data[lang]["section-projets"].projet3.lienprojet}
      />

      <div ref={domRef} className="trigger-anim-titre-projet"></div>
    </div>
  );
}
