import './Loading.scss';
// import logo  from '../logo.gif';

let loadingGif = require("../media/loadingLogo.gif")

export default function Loading() {
    
    return (
        <div className="loading-container">
            <div className="hide-gif"></div>
            <img className='logo' src={loadingGif} alt="Loading..." />
        </div>
    );
}