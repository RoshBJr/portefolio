import './Projet.scss';
import BoiteProjet from './UI/BoiteProjet';
import data from '../data/data-fr.json';
import TitreSection from './UI/TitreSection';

export default function Projet() {

    return (
        <div className="container-projet">
            <TitreSection titre={data['section-projets'].titre} />
            <BoiteProjet/>            
        </div>
    );
}
