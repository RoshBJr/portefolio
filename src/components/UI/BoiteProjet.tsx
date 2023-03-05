import './BoiteProjet.scss';
import data from '../../data/data-fr.json';
import * as Icons from "../UI/Icons";
import { Icon } from '@mui/material';

export default function BoiteProjet() {

    return (
        <div className="boite-projet">
            
            <div className="container-info">
                <h2 className="titre">{data['section-projets'].projet1.titre}</h2>
                <p className="desc">{data['section-projets'].projet1.desc}</p>
                
                <div className="logiciels">
                    <h3 className="sous-titre">Réalisé avec</h3>
                    <div className="logo"><Icons.CSharpIcon/></div>
                    <div className="logo"><Icons.UnityIcon/></div>
                </div>
                <div className="lien">
                    <a className="logo github">{<Icons.GitHubIcon/>}</a>
                    <a className=" logo projet">{<Icons.BuildIcon/>}</a>
                </div>
            </div>
            <img src={require('../media/lfo.png')} alt="" />
        </div>
    );
}