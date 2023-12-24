import data from '../data/data-fr.json';


export default function doIt() {
    // const variables
    const firstH = {dom: document.querySelector('.titre-projet'), text: data['section-presentation']['titre-projet']};
    // console.log(firstH);
    setTimeout( appendText, 1000, firstH['dom'], firstH['text'], 0);
}

function appendText(dom, text, index) {
        if(index < text.length) {
            dom.innerHTML += text[index];
            setTimeout( appendText, 100, dom, text, index+=1);
        }
}