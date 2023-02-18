import React, {useState} from 'react';
import '../UI/BurgerMenu.scss';

export default function BurgerMenu() {

    const [animBurger, setBurgerState] = useState(false);

    const toggleMenu = () => setBurgerState(!animBurger);

    return (
        <div className="container-menu">
            <div className={ animBurger ? 'container-lignes clicked': 
                            'container-lignes unclicked'}
                            onMouseDown={toggleMenu}>

                    <div className="ligne-1"></div>
                    <div className="ligne-2"></div>
                    <div className="ligne-3"></div>
            </div>
        </div>
    );
}