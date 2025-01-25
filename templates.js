function generateTemplatesForRenderDishes(dish, i) {
    return `
                        <div class="dish">
                            <div class="dishHeader">
                                <h2>${dish.name}</h2>
                                <button onclick="addToBasket(${i})" class="dishHeaderBtn">
                                    <img class="imgPlus" src="./assets/img/plus.png" alt="img. Button Plus">
                                </button>
                            </div>
                            <p id="ingredients">${dish.description}</p>
                            <p id="price">${dish.price.toLocaleString(undefined, { //toLocaleString-Funktion ist großartig
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: "currency",
        currency: "EUR"
    })}</p>
                        </div>
    `
}

function generateTemplatesForRenderBasket(basketDish, i) {
    return `
    <div class="selectedDish">
        <h2 class="mySelectedDish">${basketDish.name}</h2>
        <div class="insertedDish">
            <form class="portionInformation" onsubmit="calculatePortions(event)">
                <button type="submit" class="buttonMinus">
                    <img src="./assets/img/minus.png" alt="Portionen-Icon">
                </button>
                <input id="quantity" type="number" min="1" max="15" step="1" name="quantity"
                    required value="${basketDish.amount}">
                <button type="submit" class="buttonPlus">
                    <img src="./assets/img/plus.png" alt="Portionen-Icon">
                </button>
            </form>
            <div class="priceOfTheDish">${basketDish.price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: "currency",
        currency: "EUR"
    })}</div>
            <button id="btnBasket" onclick="deleteSelectedDish(${i})"><img class="deleteSelectedDish" src="./assets/img/trash.png"
                alt="imd. Delete your selected dish"></button>
        </div>
    </div>
`
}