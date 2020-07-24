function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeBackgroundColor() {
    let colorBg = document.getElementById('color-overlay');
    colorBg.style.backgroundColor = generateRandomColor();
}

function changeBackgroundText() {
    let textBg = document.getElementById('text-bg');
    if (textBg.innerHTML == 'ON THE FLOOR BABY')
        textBg.innerHTML = 'HIT IT HARD BABY';
    else if (textBg.innerHTML == 'HIT IT HARD BABY')
        textBg.innerHTML = 'ROCK THE PARTY BABY';
    else if (textBg.innerHTML == 'ROCK THE PARTY BABY')
        textBg.innerHTML = 'ON THE FLOOR BABY';

}

function checkbg() {
    generateRandomColor();
    changeBackgroundColor();
    changeBackgroundText();

}

setInterval(checkbg, 200);