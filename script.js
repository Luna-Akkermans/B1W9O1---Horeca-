const drinkNames = items.map(key => key.name);
const drinkPrices = items.map(key => key.price);
const resultLi = document.createElement('li');
var orderStatus = true;

var orderQuestion = (index, nameOfDrink) => {
    items[index].amount = Number(prompt(`Vul aantal ${nameOfDrink} in, wilt u toch geen fristi laat het veld leeg en druk oké.`));
}

var calcuLateCart = () => {
    items.forEach(function (key) {
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
    let UserInput = prompt("Wat wil jij bestellen? \n" + drinkNames + "\n" + drinkPrices).toLowerCase();
    switch (UserInput) {
        case "fristi":
            orderQuestion(0, "fristi")
            break;
        case "bier":
            orderQuestion(1, "bier")
            break;
        case "fris":
            orderQuestion(2, "fris")
            break;
        case "stop":
            calcuLateCart();
            orderStatus = false;
            break;
    }
} while (orderStatus)