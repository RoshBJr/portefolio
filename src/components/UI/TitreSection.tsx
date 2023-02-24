import '../UI/TitreSection.scss';

interface Props {
    titre:string;
}

export default function TitreSection({titre}:Props) {

    return (
        <div className="container-titre">
            <h2 className="titre-section">{titre}</h2>
        </div>
    );
}