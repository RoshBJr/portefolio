import "./Competence.scss";
import data from "../data/data.json";
import Cookies from "universal-cookie";
import TitreSection from "./UI/TitreSection";
import BoiteLangage from "./UI/BoiteLangage";
import BoiteFrWrk from "./UI/BoiteFrWrk";
import BoiteLogiciels from "./UI/BoiteLogiciels";
import { useEffect, useState } from "react";

export default function Competence() {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  useEffect(() => {
    const cookies = new Cookies();
    setLang(cookies.get("lang") ?? 'fr');
  }, []);

  return (
    <div className="container-competence">
      <div id="compétences"></div>
      <TitreSection titre={data[lang]["section-competence"].titre} />
      <BoiteLangage />
      <BoiteLogiciels />
      <BoiteFrWrk />
    </div>
  );
}
