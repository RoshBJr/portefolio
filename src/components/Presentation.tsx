import './Presentation.scss';
import data from '../data/data-fr.json';
import colors from '../data/colors.json';
import TextTypingAnim from './UI/TextTypingAnim';
import { color } from '@mui/system';
import { text } from 'stream/consumers';

interface Props {
    titre?: string;
    nom?: string;
    texte?: string;
    richBlack?: string;
    airForceBlue?: string;
    midnightGreen?: string;
    ashGrey?:string;
    beige?:string;
}

export default function Presentation({titre, nom, texte, richBlack, airForceBlue,
                                      midnightGreen, ashGrey, beige}:Props) {

    titre = data['section-presentation']['titre-projet'];
    nom = data['section-presentation'].nom;
    texte = data['section-presentation']['texte-presentation'];
    midnightGreen = colors.Midnight_green;
    richBlack = colors.Rich_black;
    airForceBlue = colors.Air_force_blue;
    ashGrey = colors.Ash_grey;
    beige = colors.Beige;

    return (
        <div className="container-presentation">
            <h3 className="titre-projet">
                <TextTypingAnim  bgColor={midnightGreen} text={titre} animDelai={'200ms'}/>
                {titre}
            </h3>

            <h1 className="nom">
                <TextTypingAnim  bgColor={midnightGreen} text={nom} animDelai={'2.5s'}/>
                {nom}
            </h1>

            <p className="texte-presentation">
                {texte}
            </p>
        </div>
    );
}