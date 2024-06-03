import data from "../../data/data.json";
import LigneCompetence from "./LigneCompetence";
import * as Icons from "../UI/Icons";
import "./BoiteCompetence.scss";
import { useRef, useState, useEffect } from "react";
import Cookies from "universal-cookie";

export default function BoiteFrWrk() {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef<HTMLDivElement>(null);

  const [lang, setLang] = useState<"fr" | "en">("fr");
  
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
    <>
      <div className={`boite-competence ${isVisible ? "is-visible" : ""}`}>
        <h2 className="boite-titre">
          {data[lang]["section-competence"]["section-frameworks-cms"].titre}
        </h2>
        <div className="container-ligne">
          <LigneCompetence
            Icone={Icons.ReactIcon}
            titre={
              data[lang]["section-competence"]["section-frameworks-cms"].frameWrk
                .react.titre
            }
          />
          <LigneCompetence
            Icone={Icons.NextjsIcon}
            titre={
              data[lang]["section-competence"]["section-frameworks-cms"].frameWrk
                .nextjs.titre
            }
          />
          <LigneCompetence
            Icone={Icons.StorybookIcon}
            titre={
              data[lang]["section-competence"]["section-frameworks-cms"].frameWrk
                .storybook.titre
            }
          />

          <LigneCompetence
            Icone={Icons.WpIcon}
            titre={
              data[lang]["section-competence"]["section-frameworks-cms"].Cms.wordpress
                .titre
            }
          />
          <LigneCompetence
            Icone={Icons.FireBIcon}
            titre={
              data[lang]["section-competence"]["section-frameworks-cms"].Cms.firebase
                .titre
            }
          />
          <LigneCompetence
            Icone={Icons.HBIcon}
            titre={
              data[lang]["section-competence"]["section-frameworks-cms"].Cms.hubspot
                .titre
            }
          />
          <LigneCompetence
            Icone={Icons.DirectusIcon}
            titre={
              data[lang]["section-competence"]["section-frameworks-cms"].Cms.directus
                .titre
            }
          />
          <LigneCompetence
            Icone={Icons.SanityIcon}
            titre={
              data[lang]["section-competence"]["section-frameworks-cms"].Cms.sanity
                .titre
            }
          />
        </div>
        <div ref={domRef} className="trigger-anim-fwrk"></div>
      </div>
    </>
  );
}
