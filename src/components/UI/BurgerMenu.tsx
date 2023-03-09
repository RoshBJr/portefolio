import React, {DOMElement, useState} from 'react';
import { JsxElement } from 'typescript';
import '../UI/BurgerMenu.scss';

interface UIProps {
    animBurger: boolean;
    setAnimBurger: Function;
}

export default function BurgerMenu({animBurger, setAnimBurger}:UIProps) {

    // menu defile
    const menuDefil = document.querySelector('.menu-list');
    // header
    const headerBg = document.querySelector('.bg-menu');

    const toggleMenu = () => setAnimBurger(!animBurger);

    if(animBurger) {
        headerBg?.classList.add('menu-in');
        menuDefil?.classList.add('show-menu');
        document.querySelector('body')?.classList.add('stop-scroll');
    }
    else {
        document.querySelector('body')?.classList.remove('stop-scroll');
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