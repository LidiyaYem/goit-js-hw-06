const categories = document.querySelector('#categories')
const categoriesItems = categories.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);


categoriesItems.forEach((elem) => {
    const categoriesItemsTitle = elem.querySelectorAll('h2');

        categoriesItemsTitle.forEach((el) => {
            console.log (`Category: ${el.textContent}`);
        });
        
    const categoriesItemsUl = elem.querySelectorAll('ul');

        categoriesItemsUl.forEach ((element) => {
            const categoriesItemsUlNumber = element.children;
            console.log(`Elements: ${categoriesItemsUlNumber.length}`);
});

});