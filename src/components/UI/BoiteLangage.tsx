import * as Icons from "../UI/Icons";
import LigneCompetence from "../UI/LigneCompetence";
import data from "../../data/data-fr.json";
import "./BoiteCompetence.scss";
import { useRef, useState, useEffect } from "react";

export default function BoiteLangage() {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <>
      <div className={`boite-competence ${isVisible ? "is-visible" : ""}`}>
        <h2 className="boite-titre">
          {data["section-competence"]["section-langages"].titre}
        </h2>

        <div className="container-ligne">
          <LigneCompetence
            Icone={Icons.JsIcon}
            titre={data["section-competence"]["section-langages"].js.titre}
          />

          <LigneCompetence
            Icone={Icons.TsIcon}
            titre={data["section-competence"]["section-langages"].ts.titre}
          />

          <LigneCompetence
            Icone={Icons.CssIcon}
            titre={data["section-competence"]["section-langages"].css.titre}
          />

          <LigneCompetence
            Icone={Icons.SassIcon}
            titre={data["section-competence"]["section-langages"].sass.titre}
          />

          <LigneCompetence
            Icone={Icons.HtmlIcon}
            titre={data["section-competence"]["section-langages"].html.titre}
          />

          <LigneCompetence
            Icone={Icons.CSharpIcon}
            titre={data["section-competence"]["section-langages"].csharp.titre}
          />

          <LigneCompetence
            Icone={Icons.PhpIcon}
            titre={data["section-competence"]["section-langages"].php.titre}
          />

          <LigneCompetence
            Icone={Icons.KotlinIcon}
            titre={data["section-competence"]["section-langages"].kotlin.titre}
          />

          <LigneCompetence
            Icone={Icons.XmlIcon}
            titre={data["section-competence"]["section-langages"].xml.titre}
          />

          <LigneCompetence
            Icone={Icons.GitIcon}
            titre={data["section-competence"]["section-langages"].git.titre}
          />

          <LigneCompetence
            Icone={Icons.TailwindIcon}
            titre={data["section-competence"]["section-langages"].tailwind.titre}
          />
        </div>
        <div ref={domRef} className="trigger-anim-projet"></div>
      </div>
    </>
  );
}
