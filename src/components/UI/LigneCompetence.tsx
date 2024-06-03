import { JsIcon } from "./Icons";
import data from '../../data/data.json';
import '../UI/LigneCompetence.scss';

interface Props {
    Icone:React.FC;
    titre:string;
}

export default function LigneCompetence({Icone, titre}:Props) {

    return (
        <div className="container-une-lang">
            <div className="icone"><Icone/></div>
            <h2 className="titre">{titre}</h2>
        </div>
    );
}