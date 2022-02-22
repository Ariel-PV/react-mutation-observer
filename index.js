const targetNode = document.getElementById('targetNode');
const input = document.getElementById('name');
const addButton = document.getElementById('add');
const changeButton = document.getElementById('change');

const config = {
    attribute: true,
    childList: true,
    subtree: true,
};

const callback = function(mutationList, observer) {
    for (let mutation of mutationList) {
        if (mutation.type === 'childList') {
            console.info('A child node has been added or changed');
        }  else if (mutation.type === 'atributes') {
            console.info('The ${mutation.atributeName} attribute has been modified');
        }
    }
}

function add() {
    const li = document.getElementById('li');
    li.appendChild(document.createTextNode(input.value));
    targetNode.appendChild(li);
}

function change() {
    targetNode.children[0].value = 10;
}

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

addButton.addEventListener('click', add);
changeButton.addEventListener('click', change);
