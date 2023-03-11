import './Competence.scss';
import data from '../data/data-fr.json';
import TitreSection from './UI/TitreSection';
import BoiteLangage from './UI/BoiteLangage';
import BoiteFrWrk from './UI/BoiteFrWrk';
import BoiteLogiciels from './UI/BoiteLogiciels';

export default function Competence() {

    return (
        <div className='container-competence' >
            <div id='compétences' ></div>
            <TitreSection titre={data['section-competence'].titre} />
            <BoiteLangage/>
            <BoiteLogiciels/>
            <BoiteFrWrk/>
        </div>
    );
}