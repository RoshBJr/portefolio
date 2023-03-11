import './Competence.scss';
import data from '../data/data-fr.json';
import TitreSection from './UI/TitreSection';
import BoiteLangage from './UI/BoiteLangage';
import BoiteFrWrk from './UI/BoiteFrWrk';
import BoiteLogiciels from './UI/BoiteLogiciels';
import { useRef, useState, useEffect } from 'react';

export default function Competence() {

    
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
        <div className={`container-competence ${ isVisible ? 'is-visible': ''}`} >
            <div id='compétences' ></div>
            <TitreSection titre={data['section-competence'].titre} />
            <BoiteLangage/>
            <BoiteLogiciels/>
            <BoiteFrWrk/>
            <div ref={domRef} className="trigger-anim-titre-competence"></div>
        </div>
    );
}