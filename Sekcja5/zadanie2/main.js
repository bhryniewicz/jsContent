let size = 10;
let orderElements = 1;

const init = () => {

    const btn = document.createElement("button");
    document.body.appendChild(btn);
    btn.textContent = "Dodaj 10 elementow listy";

    const list = document.createElement("ul");
    document.body.appendChild(list);

    btn.addEventListener('click', createLiElements);

};

const createLiElements = () => {

        for(let i = 0; i < 10; i++) {
        const listItem = document.createElement("li");
        listItem.textContent  = `element nr ${orderElements++}`;
        document.querySelector("ul").appendChild(listItem);
        listItem.style.fontSize = `${size++}px`;
    };
};



init();