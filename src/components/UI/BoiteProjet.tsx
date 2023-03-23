import './BoiteProjet.scss';
import data from '../../data/data-fr.json';
import * as Icons from "../UI/Icons";
import { useRef, useState, useEffect } from 'react';

interface UIProps {
    titre: string;
    desc: string;
    logos: any[];
    img: string;
}

export default function BoiteProjet({titre, desc, logos, img}:UIProps) {

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
        <div className={`boite-projet ${ isVisible ? 'is-visible': ''}`}>
            
            <div className="container-info">
                <h2 className="titre">{titre}</h2>
                <p className="desc">{desc}</p>
                
                <div className="logiciels">
                    <h3 className="sous-titre">Réalisé avec</h3>
                    {logos.map( logo => <div className="logo">{logo}</div>)}
                </div>
                <div className="lien">
                    <a className="logo github">{<Icons.GitHubIcon/>}</a>
                    <a className=" logo projet">{<Icons.BuildIcon/>}</a>
                </div>
            </div>
            <img src={require(`../media/${img}.png`)} alt="" />
            <div ref={domRef} className="trigger-anim-fwrk"></div>
        </div>
    );
}