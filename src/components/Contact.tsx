import './Contact.scss';
import * as Icons from "./UI/Icons";
import data from '../data/data-fr.json';

export default function Contact() {

    return(
        <div className="contact">
            <div id='contact' ></div>
            <div className="container-icons">
                <a href={data['lien-sociaux'].github} target='_blank' className="icon"><Icons.GitHubIcon/></a>
                <a href={data['lien-sociaux'].linkedin} target='_blank' className="icon"><Icons.LinkedinIcon/></a>
                <a href={`mailto:${data['lien-sociaux'].courriel}`} target='_blank' className="icon"><Icons.MailIcon/></a>
            </div>
            <h4 className="droit-auteur">{data.contact.droit}</h4>
        </div>
    );
}