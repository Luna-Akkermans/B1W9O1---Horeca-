var invoice = []
var drinks = [{
    name: "Fristi",
    price: 1.10,
    amount: 0,
},{
    name: "Bier",
    price: 2.30,
    amount: 0
},{
    name: "Fris",
    price: 1.80,
    amount: 0
}]

var snacks = [{
    name: "8",
    price: 4.20,
    amount: 0
},{
    name: "16",
    price: 8,
    amount: 0
}]

let snackOrder = () =>{
    switch(prompt("Hoeveel wilt u? \n 8 of 16")){
        case "8":
            orderQuestion(snacks, 3, "8 Bitterballen")
            break
        case "16":
            orderQuestion(snacks, 4, "16 Bitterballen")
            break;
    }
}


function invoiceCreation(name, amount,price){
    this.name = name;
    this.amount = amount;
    this.total = '€' + amount*price;
}
