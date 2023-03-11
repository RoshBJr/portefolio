import data from '../../data/data-fr.json';
import LigneCompetence from './LigneCompetence';
import * as Icons from "../UI/Icons";
import './BoiteCompetence.scss';

export default function BoiteFrWrk() {

    return (
        <div className="boite-competence">
            <h2 className="boite-titre">
                {data['section-competence']['section-frameworks-cms'].titre}
            </h2>
            <div className="container-ligne">
                <LigneCompetence Icone={Icons.ReactIcon}
                        titre={data['section-competence']['section-frameworks-cms'].frameWrk.react.titre} />

                <LigneCompetence Icone={Icons.WpIcon} 
                        titre={data['section-competence']['section-frameworks-cms'].Cms.wordpress.titre} />
            </div>
        </div>
    );
}