import './Contact.scss';
import * as Icons from "./UI/Icons";
import data from '../data/data.json';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

export default function Contact() {
    const [lang, setLang] = useState<"fr" | "en">("fr");

    useEffect(() => {
      const cookies = new Cookies();
      setLang(cookies.get("lang") ?? 'fr');
    }, []);
    
    return(
        <div className="contact">
            <div id='contact' ></div>
            <div className="container-icons">
                <a href={data[lang]['lien-sociaux'].github} target='_blank' className="icon"><Icons.GitHubIcon/></a>
                <a href={data[lang]['lien-sociaux'].linkedin} target='_blank' className="icon"><Icons.LinkedinIcon/></a>
                <a href={`mailto:${data[lang]['lien-sociaux'].courriel}`} target='_blank' className="icon"><Icons.MailIcon/></a>
            </div>
            <h4 className="droit-auteur">{data[lang].contact.droit}</h4>
        </div>
    );
}