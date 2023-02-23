import '../UI/TextTypingAnim.scss';

interface UiProps {
    bgColor: string;
    textLength: number;
    animDelai?:string;
    duration?: string;
}

export default function TextTypingAnim({bgColor, textLength, animDelai, duration}:UiProps) {
    
    const styleBg = {backgroundColor: bgColor};
    const animDuration = {animationDuration: `${duration}`};
    const styleSteps = { animationTimingFunction: `steps(${Math.round(textLength*3)}, end)`}
    const delaiAnim = {animationDelay: `${animDelai}`};
    
    return (
        <div className="text-cover" style={{...styleBg, ...styleSteps, ...delaiAnim, ...animDuration}} ></div>
    );
}

