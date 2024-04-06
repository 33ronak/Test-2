console.log("DOM Test");

/*-----------------------------------------------------------------------*/

//  getElementById Method:
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Fruit World';
mainHeading.style.color = 'orange';

const header = document.getElementById('header');
header.style.backgroundColor = 'green';
header.style.borderBottom = 'solid orange';

const basket = document.getElementById('basket-heading');
basket.style.color = 'green';

const footer = document.getElementById('thanks');
footer.innerHTML = '<p>Please visit us again</p>';

/*-----------------------------------------------------------------------*/

//  getElementsByClassName Method:
const fruit = document.getElementsByClassName('fruit');
fruit[2].style.backgroundColor = 'yellow';

for (let i = 0; i < fruit.length; i++) {
  fruit[i].style.fontWeight = 'bold';
}

/*-----------------------------------------------------------------------*/

//  getElementsByTagName Method:

const listItems = document.getElementsByTagName('li');
listItems[4].style.color = 'blue';

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontStyle = 'italic';
}

/*-----------------------------------------------------------------------*/

// QuerySelector - single element
// querySelector - using id
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'center';

const basketHead = document.querySelector('#basket-heading');
basketHead.style.color = 'brown';


// querySelector - using class
const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

// querySelector - using tag
const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px';


//QuerySelectorAll - all element
const fruitItems = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitItems.length; i++) {
  fruitItems[i].style.backgroundColor = 'white';
  fruitItems[i].style.padding = '10px';
  fruitItems[i].style.margin = '10px';
  fruitItems[i].style.borderRadius = '5px';
}

const oddFruitItems = document.querySelectorAll('.fruit:nth-child(odd)');
for (let i = 0; i < oddFruitItems.length; i++) {
  oddFruitItems[i].style.backgroundColor = 'lightgrey';
}

const evenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < evenFruitItems.length; i++) {
  evenFruitItems[i].style.color = 'white';
  evenFruitItems[i].style.backgroundColor = 'brown';
}
