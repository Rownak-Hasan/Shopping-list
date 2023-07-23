const formElm = document.querySelector('#item-form');
const inputElm = document.querySelector('#item-input');
const ulElm = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const filterElmDiv = document.querySelector('.filter');
const filterElm = filterElmDiv.firstElementChild;

checkUi();

formElm.addEventListener('submit', addItem);
ulElm.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
filterElm.addEventListener('input', filterItems);

//Add Items
function addItem(e) {

  e.preventDefault();

  const userInput = inputElm.value;

  if(userInput === '') {

    alert('Please enter a product to continue');

    return;

  }

  const liElm = document.createElement('li');
  
  const button = createButton('remove-item btn-link text-red');


  liElm.appendChild(document.createTextNode(userInput));
  liElm.appendChild(button);

  ulElm.appendChild(liElm);

  checkUi();

  inputElm.value = '';

}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  button.appendChild(createIcon('fa-solid fa-xmark'));

  return button;
}

function createIcon(classes) {
  const i = document.createElement('i');
  i.className = classes;

  return i;
}

//Remove Items
function removeItem(e) {

  if(e.target.parentElement.classList.contains('remove-item')) {
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      checkUi();
    }
  }

}

//Clear Items
function clearItems() {

  while(ulElm.firstChild) {
    ulElm.removeChild(ulElm.firstChild);
  }

  checkUi();
  
}

//Filter Items
function filterItems(e) {

  let filterTxt = e.target.value.toLowerCase();

  const liElm = document.querySelectorAll('li');

  liElm.forEach((item) => {
    let itemTxt = item.firstChild.textContent.toLowerCase();

    if(itemTxt.includes(filterTxt)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });

}

//Clear UI by checking
function checkUi() {

  if(!ulElm.firstChild) {
    filterElmDiv.style.display = 'none';
    clearBtn.style.display = 'none';
  } else {
    filterElmDiv.style.display = 'block';
    clearBtn.style.display = 'block'
  }

}