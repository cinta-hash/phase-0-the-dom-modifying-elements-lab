// Write your code here!
const main = document.querySelector('#main');
main.remove("main");

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.id = 'victory'
newHeader.innerHTML = "jess is the champion"
document.body.appendChild(newHeader);



