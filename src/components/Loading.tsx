import './Loading.scss';
import Logo from './UI/Logo';

export default function Loading() {
    
    return (
        <div className="loading-container">
            <Logo/>
            <div className="hide-gif"></div>
        </div>
    );
}