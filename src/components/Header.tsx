import './Header.scss';
import BurgerMenu from './UI/BurgerMenu';
import HeaderLogo from './UI/HeaderLogo';
import Logo from './UI/Logo';
import NavDesktop from './UI/NavDesktop';

interface UIProps {
    animBurger: boolean;
    setAnimBurger: Function;
}

export default function Header({animBurger, setAnimBurger}:UIProps) {

    return (
        <header className="header">
            <div className="bg-menu"></div>
            <HeaderLogo/>
            <NavDesktop/>
            <BurgerMenu animBurger={animBurger} setAnimBurger={setAnimBurger} />
        </header>
    );
}