import React, {DOMElement, useState} from 'react';
import { JsxElement } from 'typescript';
import '../UI/BurgerMenu.scss';

export default function BurgerMenu() {

    const [animBurger, setBurgerState] = useState(false);

    const toggleMenu = () => setBurgerState(!animBurger);

    // menu defile
    const menuDefil = document.querySelector('.menu-list');
    // header
    const headerBg = document.querySelector('.bg-menu');
    if(animBurger) {
        headerBg?.classList.add('menu-in');
        menuDefil?.classList.add('show-menu');
    }
    else {
        headerBg?.classList.remove('menu-in');
        menuDefil?.classList.remove('show-menu');
    }

    return (
        <div className="container-menu" >
            <div className={ animBurger ? 'container-lignes clicked': 
                            'container-lignes unclicked'}
                            onClick={toggleMenu}>

                    <div className="ligne-1"></div>
                    <div className="ligne-2"></div>
                    <div className="ligne-3"></div>
            </div>
        </div>
    );
}