const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const arrayOfIngredients = [];

ingredients.map((ingredient) => {
  const ingredientName = document.createElement('li');
  ingredientName.classList.add('item');
  ingredientName.textContent = ingredient;
  arrayOfIngredients.push(ingredientName);
});

ingredientsList.append(...arrayOfIngredients);

