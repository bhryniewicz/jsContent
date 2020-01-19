let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e) => {
    // strzałka do gory 38
    // strzałka w dol 40
    // if (e.keyCode === 38) {
    //     if(red <= 255) {
    //         red += 3;
    //         green += 3;
    //         blue += 3;
    //         document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    //     };

    // }
    // else if(e.keyCode === 40) {
    //     if(red >= 0) {
    //     document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    //     red -= 3;
    //     green -= 3;
    //     blue -= 3;
    //     };
    // };
    const numberKey = e.keyCode;

    switch(numberKey) {
        case 38:
        document.body.style.backgroundColor = 
        `rgb(${ red <= 255 ? red++ : red},${green <= 255 ? green++ : green},${blue <= 255 ? blue++ : blue})`;

        break;
        case 40:
        document.body.style.backgroundColor = `rgb(${red >= 0 ? red-- : red},${green >= 0 ? green-- : green},${blue >= 0 ? blue-- : blue})`;
    }
    };


window.addEventListener('keydown', changeColor);