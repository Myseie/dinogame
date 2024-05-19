const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const score = document.getElementById('score');

function jump() {
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation');

    }, 500);
}

document.addEventListener('keypress', () => {
    if (!dino.classList.contains('jump-animation')) {
        jump();
    }
})

setInterval(() => {
    score.innerText++;
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
    if (rockLeft <0) {rock.style.display = 'none';}
    else {
        rock.style.display = '';
    }
    if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150){
        alert("Du fick så här många poäng:"+ score.innerText + "\n\nSpela igen?");
        location.reload();
    }

}, 50);