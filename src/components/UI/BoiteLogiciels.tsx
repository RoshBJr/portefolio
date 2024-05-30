import "./BoiteCompetence.scss";
import data from "../../data/data-fr.json";
import * as Icons from "../UI/Icons";
import LigneCompetence from "./LigneCompetence";
import { useRef, useState, useEffect } from "react";

export default function BoiteLogiciels() {
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
          {data["section-competence"]["section-logiciels"].titre}
        </h2>
        <div className="container-ligne">
          <LigneCompetence
            Icone={Icons.AndStudioIcon}
            titre={
              data["section-competence"]["section-logiciels"].andstudio.titre
            }
          />

          <LigneCompetence
            Icone={Icons.GitHubIcon}
            titre={data["section-competence"]["section-logiciels"].github.titre}
          />

          <LigneCompetence
            Icone={Icons.AiIcon}
            titre={data["section-competence"]["section-logiciels"].ai.titre}
          />

          <LigneCompetence
            Icone={Icons.PsIcon}
            titre={data["section-competence"]["section-logiciels"].ps.titre}
          />

          <LigneCompetence
            Icone={Icons.XdIcon}
            titre={data["section-competence"]["section-logiciels"].xd.titre}
          />

          <LigneCompetence
            Icone={Icons.PrIcon}
            titre={data["section-competence"]["section-logiciels"].pr.titre}
          />

          <LigneCompetence
            Icone={Icons.FigmaIcon}
            titre={data["section-competence"]["section-logiciels"].figma.titre}
          />

          <LigneCompetence
            Icone={Icons.SlackIcon}
            titre={data["section-competence"]["section-logiciels"].slack.titre}
          />

          <LigneCompetence
            Icone={Icons.LinuxIcon}
            titre={data["section-competence"]["section-logiciels"].linux.titre}
          />

          <LigneCompetence
            Icone={Icons.ElementorIcon}
            titre={
              data["section-competence"]["section-logiciels"].elementor.titre
            }
          />
          <LigneCompetence
            Icone={Icons.JiraIcon}
            titre={
              data["section-competence"]["section-logiciels"].jira.titre
            }
          />
        </div>

        <div ref={domRef} className="trigger-anim-log"></div>
      </div>
    </>
  );
}
