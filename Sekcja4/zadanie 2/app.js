document.body.style.height = "10000px";

const prostokat = document.createElement("div");

let size = 20;

let flag = true;

document.body.appendChild(prostokat);

prostokat.style.width = "100%";
prostokat.style.position = "fixed";
prostokat.style.left = "0";
prostokat.style.top = "0";
prostokat.style.backgroundColor = "green";
prostokat.style.height = `${size}px`;



const changeHeight = function () {
    if (size >= window.innerHeight * 0.5) {
        flag = false;
    } else if (size == 0) {
        flag = true;
    }

    if (flag) {
        size += 10;
        prostokat.style.backgroundColor = "green";
    } else {
        size -= 10;
        prostokat.style.backgroundColor = "red";
    }
    prostokat.style.height = `${size}px`;
};


window.addEventListener('scroll', changeHeight);