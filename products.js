var invoice = []
var items = [{
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

function invoiceCreation(name, amount,price){
    this.name = name;
    this.amount = amount;
    this.total = '€' + amount*price;
}
