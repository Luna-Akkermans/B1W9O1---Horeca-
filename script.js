const drinkNames = drinks.map(key => key.name);
const resultLi = document.createElement('li');
var orderStatus = true;

var orderQuestion = (typeArray, index, nameOfItem) => {
    typeArray[index].amount = Number(prompt(`Vul aantal ${nameOfItem} in, wilt u toch geen ${nameOfItem} laat het veld leeg en druk oké.`));
}

var calcuLateCart = () => {
    drinks.forEach(function (key) {
        if (key.amount != 0 && !isNaN(key.amount)) {
            invoice[key.name] = new invoiceCreation(key.name, key.amount, key.price);
        }
    })
    snacks.forEach(function (key) {
        if (key.amount != 0 && !isNaN(key.amount)) {
            invoice[key.name] = new invoiceCreation(key.name, key.amount, key.price);
        }
    })
    for (key in invoice) {
        resultLi.innerHTML = `<span>${invoice[key].name} </span> <span>${invoice[key].amount} </span> <span>${invoice[key].total} </span>`
        if(invoice.length >= 0){
         rekening.appendChild(resultLi)
        }
    }
    

}
do {
    let UserInput = prompt("Wat wil jij bestellen? \n" + drinkNames + " Snacks").toLowerCase();
    switch (UserInput) {
        case "fristi":
            orderQuestion(drinks, 0, "fristi")
            break;
        case "bier":
            orderQuestion(drinks, 1, "bier")
            break;
        case "fris":
            orderQuestion(drinks, 2, "fris")
            break;
        case "snacks":
            snackOrder();
            break;
        case "stop":
            calcuLateCart();
            orderStatus = false;
            break;
    }
} while (orderStatus)


