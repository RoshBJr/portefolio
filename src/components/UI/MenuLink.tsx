import './MenuLink.scss';

interface UiProps {
    text: string;
    barColor: string;
    linkSection: string;
}

export default function MenuLink({text, barColor, linkSection}:UiProps) {

    return (
        <a href={linkSection} className="container-button">
            <div className="anim-bar" style={{borderColor: barColor} }></div>
            <div className="text-placeholder">{text}</div>
        </a>
    );
}
