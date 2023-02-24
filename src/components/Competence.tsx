import './Competence.scss';
import data from '../data/data-fr.json';
import TitreSection from './UI/TitreSection';

export default function Competence() {

    return (
        <div className="container-competence">
            <TitreSection titre={data['section-competence'].titre} />
            
        </div>
    );
}