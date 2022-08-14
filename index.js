const element = document.getElementById('main');

element.remove();
let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id = 'victory'
newHeader.innerHTML = "Julius Ndakala is the champion";
// Write your code here!