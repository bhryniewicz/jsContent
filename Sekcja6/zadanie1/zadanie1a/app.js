const mousePosition = document.querySelector("h1");
document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX + 1;
    const y = e.clientY + 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    mousePosition.textContent = `${x}, ${y}`;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = ((x / width * 100) + (y / width * 100)) / 2;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;

    // document.body.style.backgroundColor = `rgb(${x / width * 255},${y / height * 255}, 100)`;
    // mousePosition.textContent = `${e.pageX},${e.pageY}`od poczatku strony nie przeglarki
    // mousePosition.textContent = `${e.screenX},${e.screenY}`; od poczatku ekranu

    // document.body.style.backgroundColor  =
    // `rgb(${e.clientX / 3},${e.clientY / 2},${e.clientX / e.clientY * 20})`

    //konkatencaja
    // document.body.style.backgroundColor =
    // 'rgb(' + e.clientX / 3 + ',' + e.clientY / 2 + ',' + e.clientX / e.clientY * 20 + ')';

    // bardziej uniewrsalny


});