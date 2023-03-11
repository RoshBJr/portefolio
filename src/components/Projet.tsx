import './Projet.scss';
import BoiteProjet from './UI/BoiteProjet';
import data from '../data/data-fr.json';
import TitreSection from './UI/TitreSection';
import { useRef, useState, useEffect } from 'react';

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
            <BoiteProjet/>
            <div ref={domRef} className="trigger-anim-titre-projet"></div>            
        </div>
    );
}
