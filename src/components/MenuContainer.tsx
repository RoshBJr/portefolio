import './MenuContainer.scss';
import MenuLink from './UI/MenuLink';
import colors from '../data/colors.json';
import data from '../data/data-fr.json';

export default function MenuContainer() {

    return (
        <div className="menu-list hide-menu">
            <MenuLink 
                text={data['section-competence'].titre}
                barColor={colors.Air_force_blue} 
                linkSection={`#${data['section-competence'].titre.toLowerCase()}`} />            
        </div>
    );
}