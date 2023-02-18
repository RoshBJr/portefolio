import React, {useState} from 'react';
import '../UI/Logo.scss';

export default function Logo() {

    const [hovered, setHovered] = useState(false);

    const changeHoverState = () => {
        setHovered(!hovered);
    }

    return (
        <>
            <div className={hovered ? "container-logo is-hover" : 
                            "container-logo not-hover"}
                            onMouseEnter={changeHoverState}
                            onMouseLeave={changeHoverState}>

                <div className="top-bar"></div>
                <div className="left-bar"></div>
                <div className='logo'>R</div>
                <div className="right-bar"></div>
                <div className="bottom-bar"></div>
            </div>
        </>
    );
}