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



function invoiceCreation(name, amount,price){
    this.name = name;
    this.amount = amount;
    this.total = '€' + amount*price;
}
