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

let basket = [];


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
}

function addToBasket(indexDishes) {
    let oneDish = dishes[indexDishes];
    if (getBasketIndex(oneDish) === -1) {
        basket.push({
            name: oneDish.name,
            amount: 1,
            price: oneDish.price
        });
    } else {
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

function increaseAmount() {
}

function reduceAmount() {

}

function deleteSelectedDish(indexDishes) {
    basket.splice(indexDishes, 1);
    renderBasket();
}