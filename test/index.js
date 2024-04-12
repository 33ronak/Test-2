const form = document.querySelector('form');
const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.name = 'description';
descriptionInput.id = 'description';
descriptionInput.placeholder = 'Fruit description...';
form.insertBefore(descriptionInput, form.lastElementChild);

const fruitsList = document.querySelector('.fruits');
fruitsList.addEventListener('handleInput', (event) => {
  if (event.target.className === 'fruit') {
    const descriptionInput = event.target.previousElementSibling;
    const description = document.createElement('p');
    description.style.fontStyle = 'italic';
    description.textContent = descriptionInput.value;
    event.target.appendChild(description);
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const fruitInput = document.getElementById('fruit-to-add');
  const fruitName = fruitInput.value;

  const descriptionInput = document.getElementById('description');
  const fruitDescription = descriptionInput.value;

  const newFruit = document.createElement('li');
  newFruit.classList.add('fruit');

  const fruitNameElement = document.createElement('span');
  fruitNameElement.textContent = fruitName;
  newFruit.appendChild(fruitNameElement);

  const description = document.createElement('p');
  description.style.fontStyle = 'italic';
  description.textContent = fruitDescription;
  newFruit.appendChild(description);

  const fruitsList = document.querySelector('.fruits');
  fruitsList.appendChild(newFruit);

  fruitInput.value = '';
  descriptionInput.value = '';
});

const filter = document.getElementById("filter");

filter.addEventListener("keyup", function(event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.querySelectorAll(".fruit");

  for (let i = 0; i < fruitItems.length; i++) {
    const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
    const currentFruitItemDescription = fruitItems[i].querySelector('p').textContent.toLowerCase();
    if ((currentFruitText.indexOf(textEntered) === -1) && (currentFruitItemDescription.indexOf(textEntered) === -1)) {
      fruitItems[i].style.display = "none";
    } else {
      fruitItems[i].style.display = "flex";
    }
  }
});