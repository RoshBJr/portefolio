import './Competence.scss';
import data from '../data/data-fr.json';
import TitreSection from './UI/TitreSection';
import * as Icons from './UI/Icons';
import LigneCompetence from './UI/LigneCompetence';

export default function Competence() {

    return (
        <div className="container-competence">
                <TitreSection titre={data['section-competence'].titre} />
            <div className="boite-langages">
                <h2 className="boite-titre">
                    {data['section-competence']['section-langages'].titre}
                </h2>

                <LigneCompetence Icone={Icons.JsIcon}
                    titre={data['section-competence']['section-langages'].js.titre} />

                <LigneCompetence Icone={Icons.TsIcon} 
                    titre={data['section-competence']['section-langages'].ts.titre} />
                    
                <LigneCompetence Icone={Icons.CssIcon} 
                    titre={data['section-competence']['section-langages'].css.titre} />

                <LigneCompetence Icone={Icons.SassIcon} 
                    titre={data['section-competence']['section-langages'].sass.titre} />

                <LigneCompetence Icone={Icons.HtmlIcon} 
                    titre={data['section-competence']['section-langages'].html.titre} />

                <LigneCompetence Icone={Icons.CSharpIcon} 
                    titre={data['section-competence']['section-langages'].csharp.titre} />

                <LigneCompetence Icone={Icons.PhpIcon} 
                    titre={data['section-competence']['section-langages'].php.titre} />

                <LigneCompetence Icone={Icons.KotlinIcon} 
                    titre={data['section-competence']['section-langages'].kotlin.titre} />

                <LigneCompetence Icone={Icons.XmlIcon} 
                    titre={data['section-competence']['section-langages'].xml.titre} />

                <LigneCompetence Icone={Icons.GitIcon} 
                    titre={data['section-competence']['section-langages'].git.titre} />

            </div>
        </div>
    );
}