import '../UI/TitreSection.scss';
import { useRef, useState, useEffect } from 'react';

interface Props {
    titre:string;
}

export default function TitreSection({titre}:Props) {


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
        <div className={`container-titre ${isVisible ? 'is-visible': ''}`}>
            <h2 className="titre-section">{titre}</h2>
            <div ref={domRef} className="trigger-anim-titre"></div>
        </div>
    );
}