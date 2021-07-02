const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
let walk = 310;

function shadow(e){
    let width = hero.offsetWidth;
    let height = hero.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    let xWalk = Math.round((x/width*walk) - walk/2);
    let yWalk = Math.round((y/width*walk) - walk/2)
    

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgb(255, 148, 204),
      ${xWalk * -2}px ${yWalk}px 0 rgb(255, 201, 71),
      ${yWalk}px ${xWalk * -0.5}px 0 rgb(216, 58, 86),
      ${yWalk * -1}px ${xWalk*-1}px 0 rgb(102, 222, 147)
    `;

}

hero.addEventListener('mousemove',shadow);