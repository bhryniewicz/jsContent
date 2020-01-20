const input = document.querySelector('input');
const passwords = ['jedEN', 'DwA'];
const messages = ['super', 'nieźle'];
const div = document.querySelector('div');

//ze zmiana tablicy
// passwords.forEach((password, index) => {
//     passwords[index] = password.toLowerCase();
// });

const showMeessage = (e) => {
        passwords.forEach( (item, index) => {
            const text = e.target.value;
            if(item.toLowerCase() === text.toLowerCase()) {
                div.textContent = messages[index];
                e.target.value = '';
            }
        });
};

input.addEventListener('input', showMeessage);