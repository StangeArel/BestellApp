// Daten anlegen
let dishes = [
    {
        name: "Pizza Krabben",
        description: "Eine gemischte Pizza mit Krabben und Käse.",
        price: 15.99
    },
    {
        name: "Pasta Primavera",
        description: "Hausgemachte Pasta mit frischen Frühlingsgemüsen und Kräutern.",
        price: 12.45
    },
    {
        name: "Sushi Mix",
        description: "Eine Auswahl an Nigiri, Maki und Sashimi mit frischem Fisch.",
        price: 18.99
    },
    {
        name: "Ramen Bowl",
        description: "Japanische Nudelsuppe mit zartem Schweinebauch, Ei und frischen Kräutern.",
        price: 13.50
    },
    {
        name: "Vegane Buddha Bowl",
        description: "Ein gesunder Mix aus Quinoa, Avocado, Süßkartoffeln und Tahini-Dressing.",
        price: 11.90
    },
    {
        name: "Burger Deluxe",
        description: "Saftiger Rindfleisch-Burger mit Bacon, Cheddar und hausgemachter BBQ-Sauce.",
        price: 14.99
    },
    {
        name: "Tacos Al Pastor",
        description: "Weiche Mais-Tortillas mit mariniertem Schweinefleisch, Ananas und Salsa.",
        price: 10.75
    },
    {
        name: "Griechischer Salat",
        description: "Frische Gurken, Tomaten, Oliven und Feta mit Olivenöl-Dressing.",
        price: 9.80
    },
    {
        name: "Steakhouse Ribeye",
        description: "Saftiges Ribeye-Steak mit Kräuterbutter und Rosmarin-Kartoffeln.",
        price: 24.99
    },
    {
        name: "Pad Thai",
        description: "Thailändische Reisnudeln mit Garnelen, Erdnüssen und Tamarindensoße.",
        price: 12.95
    }
];

let basket = [
    {
        name: "Pad Thai",
        amount: 16,
        price: 12.95
    },
    {
        name: "Steakhouse Ribeye",
        amount: 7,
        price: 18.95
    }
];


function init() {
    renderDishes();
    renderBasket();
}

function renderDishes() {
    let dishesRef = document.getElementById("dishes");
    dishesRef.innerHTML = "";
    for (let i = 0; i < dishes.length; i++) {
        let dish = dishes[i];
        let template = `
                        <div class="dish">
                            <div class="dishHeader">
                                <h2>${dish.name}</h2>
                                <button onclick="addToBasket(indexDishes)" class="dishHeaderBtn">
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
        dishesRef.innerHTML += template;
    }
}

function renderBasket() {
    let basketRef = document.getElementById("basketSelectedDishes");
    basketRef.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        let basketDish = basket[i];
        let template = /*HTML*/ `
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
                                <img class="deleteSelectedDish" src="./assets/img/trash.png"
                                    alt="imd. Delete your selected dish">
                            </div>
                        </div>
        `
        basketRef.innerHTML += template;
    }
}

function addToBasket(indexDishes) {
}