import './Loading.scss';
// import logo  from '../logo.gif';

let loadingGif = require("../media/loadingLogo.gif")

export default function Loading() {
    
    return (
        <div className="loading-container">
            {/* <img className='logo' src={loadingGif} alt="Loading..." /> */}
            <div className="container-logo">
                <div className="top-bar"></div>
                <div className="left-bar"></div>
                <div className='logo'>R</div>
                <div className="right-bar"></div>
                <div className="bottom-bar"></div>
            </div>
            <div className="hide-gif"></div>
        </div>
    );
}