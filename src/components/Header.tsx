import './Header.scss';
import BurgerMenu from './UI/BurgerMenu';
import Logo from './UI/Logo';

export default function Header() {

    return (
        <header className="header">
            <div className="bg-menu"></div>
            <Logo/>
            <BurgerMenu/>
        </header>
    );
}