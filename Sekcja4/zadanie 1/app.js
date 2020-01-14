const square = document.createElement('div');
document.body.appendChild(square);

let grow = true;

let size = 100;

square.style.width = `${size}px`;
square.style.height = `${size}px`;

window.addEventListener('scroll',() => {

    if(size >= window.innerWidth * 0.5) {
        grow = false;
    }
    else if (size == 0) {
        grow = true;
    }

    if(grow == true){
    size += 5;
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    }
    else
    {
    size -= 5;
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    }

});