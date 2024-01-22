const clickPa = () => {
    alert("Anong ciniclick click mo dyan ha?");
};

const otherSizeMenu = [
    "Spanish Latte",
    "Hazelnutt Latte",
    "Caramel Latte",
    "Vanilla Latte",
    "Matcha Espresso",
    "Iced Amerikano",
    "Milky Chocolate",
    "Milky Strawberry",
    "Milky Matcha",
];

const singleSizeMenu = {
    Americano: 39,
    Cappucino: 49,
    "Matcha Fusion": 49,
    "Hot Choco": 49,
    "Pure Matcha": 49,
    "Hazelnut Chocolate Coffee": 99,
    "Dirty Matcha Coffee": 99,
    "Dolce De Leche Coffee": 99,
    "Cheesy Fries": 39,
    "Cheesy MiGoreng": 49,
    "Cheesy Pesto": 99,
    "Waffle with Chocolate Ice Cream": 49,
    "Waffle with Mango Ice Cream": 49,
    "Waffle with Cookies & Cream Ice Cream": 49,
    "Cheese Sandwich": 19,
    "Ham Sandwich": 19,
    "Tuna Sandwich": 29,
};

const menuPrice = {
    "Iced Coffees": {
        Tall: 39,
        Grande: 49,
    },
    "Iced Non-Coffees": {
        Tall: 39,
        Grande: 49,
    },
    "Hot Coffees": {
        Americano: 39,
        Rest: 49,
    },
    "Hot Non-Coffees": {
        Rest: 49,
    },
    "Signature Drink": {
        Rest: 99,
    },
    Snacks: {
        "Cheesy Fries": 39,
        "Cheesy Migoreng": 49,
        "Cheesy Pesto": 99,
    },
    Desserts: {
        Rest: 49,
    },
    Sandwiches: {
        Rest: 19,
        Tuna: 29,
    },
};

const fetchMenuList = () => {
    const parentElement = document.querySelector("#menu");

    for (let item in otherSizeMenu) {
        const localItemElement = document.createElement("option");
        localItemElement.value = otherSizeMenu[item];
        localItemElement.textContent = otherSizeMenu[item];
        localItemElement.className = "option-item";
        parentElement.appendChild(localItemElement);
    }

    for (let item in singleSizeMenu) {
        const localItemElement = document.createElement("option");
        localItemElement.value = item;
        localItemElement.textContent = item;
        localItemElement.className = "option-item";
        parentElement.appendChild(localItemElement);
    }
};

let prev_state = false;

const showSize = () => {
    const menuElement = document.querySelector("#menu");
    const sizeElement = document.querySelector("#size");


    if (otherSizeMenu.includes(menuElement.value) && sizeElement.querySelector(".marker") == null) {
        const localTallElement = document.createElement("option");
        localTallElement.value = "Tall";
        localTallElement.textContent = "Tall";
        localTallElement.className = "option-item marker";
        sizeElement.appendChild(localTallElement);

        const localGrandeElement = document.createElement("option");
        localGrandeElement.value = "Grande";
        localGrandeElement.textContent = "Grande";
        localGrandeElement.className = "option-item marker";
        sizeElement.appendChild(localGrandeElement);

        prev_state = true;

        return;
    }

    if (otherSizeMenu.includes(menuElement.value) && prev_state) {
        return;
    }

    prev_state = false;
    while (sizeElement.firstChild) {
        sizeElement.removeChild(sizeElement.firstChild);
    }

    const localDefaultElement = document.createElement("option");
    localDefaultElement.value = "default";
    localDefaultElement.textContent = "Default";
    localDefaultElement.className = "option-item";
    sizeElement.appendChild(localDefaultElement);

};
