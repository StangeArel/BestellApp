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
    })
        }
                            </p>
                        </div>
    `
}

function generateTemplatesForRenderBasket(basketDish, i) {
    return `
    <div class="selectedDish">
        <h2 class="mySelectedDish">${basketDish.name}</h2>
        <div class="insertedDish">
            <div class="portionInformation">
                <button type="submit" class="buttonMinus" onclick="reduceAmount(${i})">
                    <img src="./assets/img/minus.png" alt="Portionen-Icon">
                </button>
                    <div class="quantity">${basketDish.amount}</div>
                <button type="submit" class="buttonPlus" onclick="increaseAmount(${i})">
                    <img src="./assets/img/plus.png" alt="Portionen-Icon">
                </button>
            </div>
            <div class="priceOfTheDish">${(basketDish.amount * basketDish.price).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: "currency",
        currency: "EUR"
    })
        }
            </div>
            <button class="btnBasketDeleteDish" onclick="deleteSelectedDish(${i})"><img class="deleteSelectedDish" src="./assets/img/trash.png"
                alt="imd. Delete your selected dish"></button>
        </div>
    </div>
`
}

function generateTemplatesForBasketSum() {
    return `
            <div class="Checkout">
                <p>Zwischensumme</p>
                <p>Lieferkosten</p>
                <p><b>Gesamt</b></p>
            </div>
            <div class="totalCheckout">
                <p id="subTotal">${calculateSubTotal().toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: "currency",
        currency: "EUR"
    })}</p>
                <p id="deliveryCosts">${deliveryCosts.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: "currency",
        currency: "EUR"
    })}</p>
                <p id="total"><b>${(calculateSubTotal() + deliveryCosts).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: "currency",
        currency: "EUR"
    })}</b></p>
            </div>
`
}

function generateTemplateEmptyBasket() {
    return `
            <p class="emptyBasket">Noch nichts im Warenkorb?</p>
            <p class="emptyBasket">Entdecke jetzt unsere Leckereien!</p>
    `
}

function generateTemplatesForOrderBtn() {
    return `
            <button class="orderBtn" id="orderBtn" onclick="orderBtn()">Zahlungspflichtig bestellen!</button>
`
}