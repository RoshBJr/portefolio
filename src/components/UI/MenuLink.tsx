import Cookies from 'universal-cookie';
import './MenuLink.scss';

interface UiProps {
    text: string;
    barColor: string;
    linkSection: string;
    animBurger?:boolean;
    setAnimBurger?:Function;
    langSwitcher?: boolean
}

export default function MenuLink({text, barColor, linkSection, animBurger, setAnimBurger, langSwitcher}:UiProps) {

    const closeMenu = () => 
    {
        if(langSwitcher) {
            const cookies = new Cookies();
            if(cookies.get('lang')) {
                cookies.remove('lang');
                window.location.reload();
            } else {
                cookies.set('lang', 'en');
                window.location.reload();
            }
        }
        if(setAnimBurger != null) {
            setAnimBurger(!animBurger);
        } else {
            return null;
        }
    }

    return (
        <a href={linkSection} className="container-button" onClick={closeMenu} >
            <div className="anim-bar" ></div>
            <div className="anim-bar-2"></div>
            <h2 className="text-placeholder">{text}</h2>
        </a>
    );
}
