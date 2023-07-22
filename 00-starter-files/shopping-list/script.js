const inputElement = document.querySelector('#item-input');
const formElement = document.querySelector('#item-form');
const ulElement = document.querySelector('#item-list');

function inputValue(e) {
  e.preventDefault();

  const inputText = inputElement.value;

  if(inputText === '') {
    alert('Please enter an item');
  }

  const liElement = document.createElement('li');
  const inputTextNode = document.createTextNode(inputText);
  const button = createButton('remove-item btn-link text-red');

  liElement.appendChild(inputTextNode);
  liElement.appendChild(button);
  ulElement.appendChild(liElement);

  inputElement.value = '';

}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}
function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}
// Event listeners
formElement.addEventListener('submit', inputValue);