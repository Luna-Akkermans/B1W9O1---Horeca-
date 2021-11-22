//Order Status
var orderStatus = true;
var totalOrderPrice = 0;
//Generate user qestion.
const orderQuestion = (input) => {
    cartIndex = cart.findIndex(item => item.name === input);
    if(input != 'Snacks'){
        cart[cartIndex].amount = Number(prompt(`Vul aantal ${cart[cartIndex].name} in, wilt u toch geen ${cart[cartIndex].name} laat het veld leeg en druk oké.`));
    }else{
        amountOfSnacks = Number(prompt("Wilt u 8 of 16 snacks?"));
        if(amountOfSnacks == 8){
            cart[cartIndex].type[0].amount = Number(prompt(`Vul aantal ${cart[cartIndex].type[0].name} in, wilt u toch geen ${cart[cartIndex].type[0].name} laat het veld leeg en druk oké.`));
        }else if(amountOfSnacks == 16){
            cart[cartIndex].type[1].amount = Number(prompt(`Vul aantal ${cart[cartIndex].type[1].name} in, wilt u toch geen ${cart[cartIndex].type[1].name} laat het veld leeg en druk oké.`));
        }
    }
  
}  

const finalizeOrder = () => {
  
    orderStatus = false;
    for(var key in cart){
        if(cart[key].hasOwnProperty("amount")){
            console.log(key)
            cart[key].totalPrice = cart[key].amount * Products[key].price
            totalOrderPrice = totalOrderPrice + cart[key].totalPrice;
            var li = document.createElement("li");
            li.innerHTML = `<span>${cart[key].name} </span> <span>${cart[key].amount}</span>  <span>€ ${cart[key].totalPrice}.-</span> `
            rekening.appendChild(li)
        }
        if(cart[key].hasOwnProperty("type")){
            for(var index in cart[key].type){
                if(cart[key].type[index].hasOwnProperty("amount")){
                    cart[key].type[index].totalPrice = cart[key].type[index].amount * Products[key].type[index].price
                    totalOrderPrice = totalOrderPrice + cart[key].type[index].totalPrice;
                    var li = document.createElement("li");
                    li.innerHTML = `<span>${cart[key].type[index].name} </span> <span>${cart[key].type[index].amount}</span>  <span>€ ${cart[key].type[index].totalPrice}.-</span> `
                    rekening.appendChild(li)
                }
            }
        }
    }
    var span = document.createElement("span");
    span.innerHTML = `€ ${totalOrderPrice}.-`
    totaal.appendChild(span)
}


do {
    switch (prompt("Wat wilt u bestellen? " + Products.map(key => " " + key.name)).toLowerCase()) {
        case "fristi":
            orderQuestion('Fristi');
            break;
        case "bier":
            orderQuestion('Bier');
            break;
        case "fris":
            orderQuestion('Fris');
            break;
        case "snacks":
            orderQuestion('Snacks');
            break;
        case "stop":
            finalizeOrder();
            break;
        default:
            break;

    }
} while (orderStatus)