import './BoiteCompetence.scss';
import data from '../../data/data-fr.json';
import * as Icons from '../UI/Icons';
import LigneCompetence from './LigneCompetence';

export default function BoiteLogiciels() {

    return (
        <div className="boite-competence">
            <h2 className="boite-titre">
                {data['section-competence']['section-logiciels'].titre}
            </h2>
            <div className="container-ligne">
                <LigneCompetence Icone={Icons.AndStudioIcon}
                        titre={data['section-competence']['section-logiciels'].andstudio.titre} />

                <LigneCompetence Icone={Icons.GitHubIcon} 
                        titre={data['section-competence']['section-logiciels'].github.titre} />

                <LigneCompetence Icone={Icons.AiIcon} 
                        titre={data['section-competence']['section-logiciels'].ai.titre} />

                <LigneCompetence Icone={Icons.PsIcon} 
                        titre={data['section-competence']['section-logiciels'].ps.titre} />
                
                <LigneCompetence Icone={Icons.XdIcon} 
                        titre={data['section-competence']['section-logiciels'].xd.titre} />
                
                <LigneCompetence Icone={Icons.PrIcon} 
                        titre={data['section-competence']['section-logiciels'].pr.titre} />
                
                <LigneCompetence Icone={Icons.FigmaIcon} 
                        titre={data['section-competence']['section-logiciels'].figma.titre} />
            </div>
            
        </div>
    );
}