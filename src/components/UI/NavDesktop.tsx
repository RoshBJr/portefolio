import colors from '../../data/colors.json'
import data from '../../data/data-fr.json';
import MenuLink from "./MenuLink";
import './NavDesktop.scss';

export default function NavDesktop() {

    return (
        <div className="container-links">
            <MenuLink
                text={data['section-presentation'].titre}
                barColor={colors.Air_force_blue} 
                linkSection={`#${data['section-presentation'].titre.toLowerCase()}`} />            
            <MenuLink
                text={data['section-competence'].titre}
                barColor={colors.Air_force_blue} 
                linkSection={`#${data['section-competence'].titre.toLowerCase()}`} />            
            <MenuLink
                text={data['section-projets'].titre}
                barColor={colors.Air_force_blue} 
                linkSection={`#${data['section-projets'].titre.toLowerCase()}`} />            
            <MenuLink
                text={'Contact'}
                barColor={colors.Air_force_blue} 
                linkSection='#contact' />
        </div>
    );
}