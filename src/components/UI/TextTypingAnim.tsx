import '../UI/TextTypingAnim.scss';

interface UiProps {
    bgColor: string;
    text: string;
    animDelai?:string;
}

export default function TextTypingAnim({bgColor, text, animDelai}:UiProps) {
    
    const styleBg = {backgroundColor: bgColor};
    const styleSteps = { animationTimingFunction: `steps(${text.length*2.5}, end)`}
    const delaiAnim = {animationDelay: `${animDelai}`};
    
    return (
        <div className="text-cover" style={{...styleBg, ...styleSteps, ...delaiAnim}} ></div>
    );
}

