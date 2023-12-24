import './Presentation.scss';
import data from '../data/data-fr.json';
import colors from '../data/colors.json';
import TextTypingAnim from './UI/TextTypingAnim';import { title } from 'process';
;

interface Props {
    titre?: string;
    nom?: string;
    texte?: string;
    richBlack?: string;
    airForceBlue?: string;
    midnightGreen?: string;
    ashGrey?:string;
    beige?:string;
    greeting1?:string;
    greeting2?:string;
}

export default function Presentation({titre, nom, texte, richBlack, airForceBlue,
                                      midnightGreen, ashGrey, beige, greeting1, greeting2}:Props) {

    titre = data['section-presentation']['titre-projet'];
    nom = data['section-presentation'].nom;
    greeting1 = data['section-presentation'].greeting1;
    greeting2 = data['section-presentation'].greeting2;
    texte = data['section-presentation']['texte-presentation'];
    midnightGreen = colors.Midnight_green;
    richBlack = colors.Rich_black;
    airForceBlue = colors.Air_force_blue;
    ashGrey = colors.Ash_grey;
    beige = colors.Beige;

    return (
        <div className="container-presentation">
            <div id='présentation' ></div>
            <h3 className="titre-projet">
                {/* <TextTypingAnim  bgColor={midnightGreen} textLength={titre.length} animDelai={'200ms'} duration={'2s'}/>
                {titre} */}
            </h3>

            <h1 className="nom">
                <TextTypingAnim  bgColor={midnightGreen} textLength={nom.length} animDelai={'2.2s'} duration={'2s'}/>
                {nom}
            </h1>
            <div className="salutation-container">
                <h2 className="hello">
                    <TextTypingAnim bgColor={midnightGreen} textLength={greeting1.length} animDelai={'5s'} duration={'.5s'}/>
                    {greeting1}
                </h2>
                <h2 className="world">
                    <TextTypingAnim bgColor={midnightGreen} textLength={greeting2.length} animDelai={'5.5s'} duration={'.5s'}/>
                    {greeting2}
                </h2>
            </div>

            <p className="texte-presentation">
                {texte}
            </p>
            <a href={`mailto:${data['lien-sociaux'].courriel}`} className="envoyer-courriel">
                <h2  className="texte">Dites Bonjour</h2>
            </a>
        </div>
    );
}