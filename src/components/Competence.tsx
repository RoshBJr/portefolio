import './Competence.scss';
import data from '../data/data-fr.json';
import TitreSection from './UI/TitreSection';
import * as Icons from './UI/Icons';

export default function Competence() {

    return (
        <div className="container-competence">
            <TitreSection titre={data['section-competence'].titre} />
            <div className="container-titre-img">
                <h2 className="titre">{data['section-competence']['section-langages'].js.titre}</h2>
                <div className='container-icon'></div>
                <Icons.PrIcon/>
                <Icons.AiIcon/>
                <Icons.AndStudioIcon/> {/*not working*/}
                <Icons.CSharpIcon/>
                <Icons.CssIcon/>
                <Icons.FigmaIcon/>
                <Icons.GitIcon/>
                <Icons.GitHubIcon/>
                <Icons.HtmlIcon/>
                <Icons.KotlinIcon/>
                <Icons.PhpIcon/>
                <Icons.PrIcon/>
                <Icons.PsIcon/>
                <Icons.ReactIcon/>
                <Icons.SassIcon/>
                <Icons.TsIcon/>
                <Icons.XdIcon/>
                <Icons.XmlIcon/>
            </div>
        </div>
    );
}