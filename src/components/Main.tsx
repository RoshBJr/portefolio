import Competence from './Competence';
import Contact from './Contact';
import Header from './Header';
import './Main.scss';
import Presentation from './Presentation';
import Projet from './Projet';
import { useState } from 'react';

interface UIProps {
    animBurger:boolean;
    setAnimBurger:Function;
}

export default function Main({animBurger, setAnimBurger}:UIProps) {


    return (
        <>
        <Header animBurger={animBurger} setAnimBurger={setAnimBurger} />
        <div className="main">
            <section className="all-sections">
                <Presentation/>
                <Competence/>
                <Projet/>
                <Contact/>
            </section>
        </div>
        </>
    );
}