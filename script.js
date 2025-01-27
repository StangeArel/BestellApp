function init() {
    renderDishes();
    renderBasket();
}

function renderDishes() {
    let dishesRef = document.getElementById("dishes");
    dishesRef.innerHTML = "";
    for (let i = 0; i < dishes.length; i++) {
        let dish = dishes[i];
        let template = generateTemplatesForRenderDishes(dish, i);
        dishesRef.innerHTML += template;
    }
}

function renderBasket() {
    let basketRef = document.getElementById("basketSelectedDishes");
    basketRef.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
        let basketDish = basket[i];
        let template = generateTemplatesForRenderBasket(basketDish, i);
        basketRef.innerHTML += template;
    }
    emptyBasketLetMeKnow()
}

function emptyBasketLetMeKnow() {
    let containerForEntireSum = document.getElementById("containerForEntireSum");

    if (basket.length === 0) {
        let basketEmptyText = document.getElementById(`basketSelectedDishes`);
        basketEmptyText.innerHTML = generateTemplateEmptyBasket();
        containerForEntireSum.innerHTML = "";
        return;
    }
    containerForEntireSum.innerHTML = generateTemplatesForBasketSum();
}

function addToBasket(indexDishes) {
    let oneDish = dishes[indexDishes];
    if (getBasketIndex(oneDish) === -1) {
        basket.push({
            name: oneDish.name,
            amount: 1,
            price: oneDish.price
        });
    } else if (basket[getBasketIndex(oneDish)].amount > 0 && basket[getBasketIndex(oneDish)].amount < 15) {
        basket[getBasketIndex(oneDish)].amount += 1;
    }
    renderBasket();
}

function getBasketIndex(dish) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].name == dish.name) {
            return i;
        }
    }
    return -1;
}

function increaseAmount(indexBasket) {
    let oneDish = basket[indexBasket];
    if (oneDish.amount < 15) {
        oneDish.amount += 1;
    }
    renderBasket();
}

function reduceAmount(indexBasket) {
    let oneDish = basket[indexBasket];
    if (oneDish.amount > 1) {
        oneDish.amount -= 1;
    } else {
        basket.splice(indexBasket, 1);
    }
    renderBasket();
}

function deleteSelectedDish(indexDishes) {
    basket.splice(indexDishes, 1);
    renderBasket();
}

function toggleOverlay() {
    let overlayRef = document.getElementById('basketWrapper');
    overlayRef.classList.toggle('showBasketOverlay');
    overlayRef.classList.toggle('basketWrapper');

    let mainRef = document.getElementById('main');
    mainRef.classList.toggle('displayNone');

    let basketRef = document.getElementById('basket');
    basketRef.classList.toggle('basketWidth');

    let closeButtonRef = document.getElementById('closeBasketBtn');
    closeButtonRef.classList.toggle('displayNone');
}

function calculateSubTotal() {
    let subTotalInzwischen = 0;
    for (let i = 0; i < basket.length; i++) {
        subTotalInzwischen += basket[i].price * basket[i].amount;
    }
    return subTotalInzwischen;
}