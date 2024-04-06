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