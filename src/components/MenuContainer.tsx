import './MenuContainer.scss';
import MenuLink from './UI/MenuLink';
import colors from '../data/colors.json';
import data from '../data/data-fr.json';
import BurgerMenu from './UI/BurgerMenu';
import { useState } from 'react';

interface UIProps {
    animBurger:boolean;
    setAnimBurger:Function;
}

export default function MenuContainer({animBurger, setAnimBurger}:UIProps) {

    return (
        <div className="menu-list hide-menu">
            <MenuLink
                animBurger={animBurger}
                setAnimBurger={setAnimBurger}
                text={data['section-presentation'].titre}
                barColor={colors.Air_force_blue} 
                linkSection={`#${data['section-presentation'].titre.toLowerCase()}`} />            
            <MenuLink
                animBurger={animBurger}
                setAnimBurger={setAnimBurger}
                text={data['section-competence'].titre}
                barColor={colors.Air_force_blue} 
                linkSection={`#${data['section-competence'].titre.toLowerCase()}`} />            
            <MenuLink
                animBurger={animBurger}
                setAnimBurger={setAnimBurger} 
                text={data['section-projets'].titre}
                barColor={colors.Air_force_blue} 
                linkSection={`#${data['section-projets'].titre.toLowerCase()}`} />            
            <MenuLink
                animBurger={animBurger}
                setAnimBurger={setAnimBurger} 
                text={'Contact'}
                barColor={colors.Air_force_blue} 
                linkSection='#contact' />            
        </div>
    );
}