const categEl = document.querySelector('#categories');
// console.log(categEl);

const categItemsEl = categEl.querySelectorAll('.item');
// console.log(categItemsEl);

const amount = `Number of categories: ${categItemsEl.length}`;
console.log(amount);



categItemsEl.forEach(function (elem) {
    const categItemsElTitle = elem.querySelectorAll('h2');
// console.log(categItemsElTitle);

    categItemsElTitle.forEach(function (element) {
        console.log(`Category: ${element.textContent}`);
    
});



    const categTitleEl = elem.querySelectorAll('ul');
// console.log(categTitleEl);

    categTitleEl.forEach (function (element) {
        const categTitleElAmount = element.children;
        console.log(`Elements: ${categTitleElAmount.length}`);
});

});

