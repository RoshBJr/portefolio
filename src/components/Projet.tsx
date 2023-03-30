import './Projet.scss';
import BoiteProjet from './UI/BoiteProjet';
import data from '../data/data-fr.json';
import TitreSection from './UI/TitreSection';
import * as Icons from "./UI/Icons";
import { useRef, useState, useEffect } from 'react';
import { Icon } from '@mui/material';

export default function Projet() {


    const [isVisible, setVisible] = useState(false);

    const domRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) {
          setVisible(true);
          if(domRef.current) observer.unobserve(domRef.current);
        }
      });
        if(domRef.current) observer.observe(domRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={`container-projet ${ isVisible ? 'is-visible': ''}`}>
            <div id='projets' ></div>
            <TitreSection titre={data['section-projets'].titre} />
            <BoiteProjet
              titre={data['section-projets'].projet1.titre}
              desc={data['section-projets'].projet1.desc}
              logos={[<Icons.CSharpIcon/>, <Icons.UnityIcon/>]}
              img={data['section-projets'].projet1.img}
              projectSrc={data['section-projets'].projet1.liengithub}
              projectBuild={data['section-projets'].projet1.lienprojet}
            />

            <BoiteProjet
              titre={data['section-projets'].projet2.titre}
              desc={data['section-projets'].projet2.desc}
              logos={[<Icons.AndStudioIcon/>, <Icons.KotlinIcon/>, <Icons.XmlIcon/>]}
              img={data['section-projets'].projet2.img}
              projectSrc={data['section-projets'].projet2.liengithub}
              projectBuild={data['section-projets'].projet2.lienprojet}
            />

            <BoiteProjet
              titre={data['section-projets'].projet3.titre}
              desc={data['section-projets'].projet3.desc}
              logos={[<Icons.AndStudioIcon/>, <Icons.KotlinIcon/>, <Icons.XmlIcon/>]}
              img={data['section-projets'].projet3.img}
              projectSrc={data['section-projets'].projet3.liengithub}
              projectBuild={data['section-projets'].projet3.lienprojet}
            />            
            <BoiteProjet
              titre={data['section-projets'].projet4.titre}
              desc={data['section-projets'].projet4.desc}
              logos={[<Icons.ReactIcon/>, <Icons.HtmlIcon/>, <Icons.SassIcon/>, <Icons.TsIcon/>]}
              img={data['section-projets'].projet4.img}
              projectSrc={data['section-projets'].projet4.liengithub}
              projectBuild={data['section-projets'].projet4.lienprojet}
            />
            <div ref={domRef} className="trigger-anim-titre-projet"></div>            
        </div>
    );
}
