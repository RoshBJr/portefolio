import React, {useState} from 'react';
import '../UI/HeaderLogo.scss';

export default function HeaderLogo() {

    const [hovered, setHovered] = useState(false);

    const changeHoverState = () => {
        setHovered(!hovered);
    }

    const reloadPage = () => window.location.reload();

    return (
        <>
            <div className={hovered ? "container-logo is-hover" : 
                            "container-logo not-hover"}
                            onMouseEnter={changeHoverState}
                            onMouseLeave={changeHoverState}
                            onClick={reloadPage}>

                <div className="top-bar"></div>
                <div className="left-bar"></div>
                <div className='logo'>R</div>
                <div className="right-bar"></div>
                <div className="bottom-bar"></div>
            </div>
        </>
    );
}