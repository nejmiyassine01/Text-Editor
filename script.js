let textOutput = document.getElementById('text-output');

updateText = () => {
    let textInput = document.getElementById('text-input').value;
    textOutput.innerText = textInput;
}

makeBold = (elem) => {
    elem.classList.toggle('active');
    textOutput.classList.toggle('bold');
}

makeItalic = (elem) => {
    elem.classList.toggle('active');
    textOutput.classList.toggle('italic');
}

makeUnderline = (elem) => {
    elem.classList.contains('active') ?
        textOutput.classList.remove('underline') :
        textOutput.classList.add('underline');

    elem.classList.toggle('active');
}

alignText = (elem, alignType) => {
    textOutput.style.textAlign = alignType;
    
    let btnLsts = document.getElementsByClassName('align');

    for (let btn of btnLsts) { 
        btn.classList.remove('active');
    }

    elem.classList.add('active');
}