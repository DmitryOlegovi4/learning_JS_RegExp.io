// /*
// \w - символ(буква или цифра)
// \w+ - слово целиком (до пробела) или цифры
// \W	не буквенно-цифровой
// \d	числовой символ (такой же как [0123456789])
// \D	нечисловой
// \s	любой пробел (такой же как [\t\n\r\f])
// \S	не пробел
// \h	горизонтальный разделитель. Табуляция, пробел и все символы
// которые определены в Unicode как «space separator».
// \H	не горизонтальный разделитель
// \v	вертикальные разделители. новая строка и все символы
// которые входят в набор «разделители строк» Unicode.
// \V	не вертикальный разделитель
//
// \b	разделитель слов
// \B	разделительс с не-словом
// */

let result = document.querySelector('.result');
let inputElem = document.getElementById('keyText');
let searchText = document.getElementById('searchText');

inputElem.addEventListener('input', function () {
    let text = searchText.innerText;
    result.innerHTML = '';
    let inputText = inputElem.value;
    if (inputText === '' || inputText === ' '){
        searchText.innerHTML = text;
        return
    }
    if (inputText){
        let regexp = new RegExp(`\\b\\w*(${inputText})\\w*\\b`, "gi");
        let regexp2 = new RegExp(inputText, "gi");
        let resultElem = text.match(regexp);
        let resultColor = text
            .replace(regexp, function (a,group) {
            return `<span>${a}</span>`
            })
            .replace(regexp2, function (a,group) {
                return `<b>${a}</b>`
            });
        if (resultElem === null){
            let resultContainer = document.createElement('p');
            resultContainer.innerText = 'Совпадений не найдено'
            result.append(resultContainer);
        } else {
            let resultArr = resultElem.slice();
            for (let elem of resultArr){
                let text = searchText.innerText;
                let resultContainer = document.createElement('p');
                resultContainer.append(elem);
                result.append(resultContainer)
                searchText.innerHTML = resultColor;
            }
        }
    }

})
//ДОБАВЛЕНИЕ СВОЕГО ТЕКСТА
let changeTextBtn = document.querySelector('.changeTextBtn');
let changeTextarea = document.getElementById('changeTextarea');

changeTextBtn.addEventListener('click', function () {
    let changeText = changeTextarea.value;
    searchText.innerText = changeText;
    changeTextarea.value = '';
})


//ДВИЖЕНИЕ ГЛАЗ
document.onmousemove = function (event) {
    let width = window.innerWidth;
    let x = event.clientX-width/2+50;
    let y = event.clientY-110;
    document.querySelector('.eyeBig').style.transform = 'rotate('+57.2858*arcctg(x,y)+'deg)';
    document.querySelector('.eyeBig2').style.transform = 'rotate('+57.2858*arcctg(x-116,y)+'deg)';
    function arcctg(x,y) {
        if (x>0 && y>0){return Math.PI/2 - Math.atan(x/y)}
        if (x<0 && y>0){return Math.PI/2 - Math.atan(x/y)}
        if (x<0 && y<0){return Math.PI + Math.atan(y/x)}
        if (x>0 && y<0){return 3*Math.PI/2 + Math.abs(Math.atan(x/y))}
    }
}




// function findLetter(str,l,p){
//     for (let i=0; i<str.length; i++){
//         if(str[i]===l){
//             p--;
//         }
//         if (p===-1){
//             return i
//         }
//     }
//     return -1
// }
// inputElem.addEventListener('input', function () {
//     let mask = '_ (___) ___-__-__';
//     let val = inputElem.value;
//     let text = val.replace(/\D+/g, '');
//     let numCnt = text.length;
//     if (numCnt>=11){
//         text.slice(0,11);
//         numCnt = 11
//         inputElem.classList.add('on')
//     } else{
//         inputElem.classList.remove('on')
//     }
//     inputElem.classList.add('off')
//     let slice_index =  findLetter(mask,'_',numCnt-1) +1;
//     mask = mask.slice(0,slice_index);
//     for (let n of [...text]){
//         mask = mask.replace('_', n);
//     }
//     if (mask !==''){
//         mask = '+7' + mask.slice(1);
//     }
//     inputElem.value = mask;
// })
