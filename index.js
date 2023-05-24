let output = document.getElementById('output')

let students = ['Иванов', 'Петров', 'Тарасов', 'Кузнецова', 'Чернышова', 'Гордеева', 'Мамаев', 'Белова','Емельянов','Солнцева']

let arrayHtml = '<p>  </p>';

for (let i = 0; i < students.length; i++) {
    let n = Math.floor(Math.random() * 4) + 2
    let element = students[i];
    arrayHtml += '<p>' + element + ' - ' + n + '</p>';
}
output.innerHTML = arrayHtml;



let btn = document.getElementById('start')
let num1 = document.getElementById('result')
let imageResult = document.getElementById('pctResult')
let various = [ 'eagle.jpg', 'tails.jpg']
pctResult.hidden = 0;
start.onclick = f1
function f1() {
    pctResult.hidden = 1;
    result.textContent = '';
    setTimeout(() => {
        var res = Math.random();
        if (res > 0.5) { result.textContent = 'Орёл';
          imageResult.setAttribute('src', various[0]) } else { result.textContent = 'Решка';imageResult.setAttribute('src', various[1]) }
        pctResult.hidden = 0;
    }, 500);
}




