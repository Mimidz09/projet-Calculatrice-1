const outputScreen = document.getElementById('outputScreen');

const buttons = Array.from(document.querySelectorAll('button'));

buttons.map(button => button.addEventListener('click', (e)=>{
    switch (e.target.innerText) {
        case 'AC':
                outputScreen.innerText = '';
             break;
         case '=':
             try{
                outputScreen.innerText = eval(outputScreen.innerText);
             } catch{
                outputScreen.innerText = 'Error!'
             }
             break;
         default:
                outputScreen.innerText += e.target.innerText
             break;
}}));