import './MenuLink.scss';

interface UiProps {
    text: string;
    barColor: string;
    linkSection: string;
    animBurger:boolean;
    setAnimBurger:Function;
}

export default function MenuLink({text, barColor, linkSection, animBurger, setAnimBurger}:UiProps) {

    const closeMenu = () => setAnimBurger(!animBurger);

    return (
        <a href={linkSection} className="container-button" onClick={closeMenu} >
            <div className="anim-bar" style={{borderColor: barColor} }></div>
            <h2 className="text-placeholder">{text}</h2>
        </a>
    );
}
