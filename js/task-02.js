const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList);


ingredients.forEach(function (elem) {
  const ingredientName = document.createElement(`li`);
  ingredientName.classList.add('item');
  ingredientName.textContent = elem;
  ingredientsList.append(ingredientName);
});

