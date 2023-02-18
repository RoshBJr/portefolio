import './Main.scss';
import BurgerMenu from './UI/BurgerMenu';
import Logo from './UI/Logo';

export default function Main() {

    return (
        <div className="main">
            <header className="header">
                <Logo/>
                <BurgerMenu/>
            </header>
            <section className="about"></section>
        </div>
    );
}