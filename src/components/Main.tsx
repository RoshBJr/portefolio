import Competence from './Competence';
import Header from './Header';
import './Main.scss';
import Presentation from './Presentation';

export default function Main() {

    return (
        <>
        <Header/>
        <div className="main">
            <section className="all-sections">
                <Presentation/>
                <Competence/>
            </section>
        </div>
        </>
    );
}