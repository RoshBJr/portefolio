import data from '../data/data-fr.json';


export default function doIt() {
    // const variables
    const firstH = {dom: document.querySelector('.titre-projet'), text: data['section-presentation']['titre-projet']};
    const secondH = {dom: document.querySelector('.nom'), text: data['section-presentation']['nom']};
    const thirdH = {dom: document.querySelector('.hello'), text: data['section-presentation']['greeting1']};
    const fourthH = {dom: document.querySelector('.world'), text: data['section-presentation']['greeting2']};


    setTimeout( appendText, 200, firstH['dom'], firstH['text'], 0);
    setTimeout( appendText, 1500, secondH['dom'], secondH['text'], 0);
    setTimeout( appendText, 3300, thirdH['dom'], thirdH['text'], 0);
    setTimeout( appendText, 3900, fourthH['dom'], fourthH['text'], 0);
}

function appendText(dom, text, index) {
        if(index < text.length) {
            dom.innerHTML += text[index];
            setTimeout( appendText, 100, dom, text, index+=1);
        } else {
            dom.classList.add("remove-cursor");
        }
}