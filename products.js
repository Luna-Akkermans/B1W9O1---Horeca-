var Products = [{
    name: "Fristi",
    price: 1.10,
}, {
    name: "Bier",
    price: 1.5
}, {
    name: "Fris",
    price: 1.80,
},
{
    name: 'Snacks(8,16)',
    type: [{
        amountOfSnacks: 8,
        price: 4.20,
    }, {
        amountOfSnacks: 16,
        price: 8,
    }]
}]

var cart = [{
        name: 'Fristi',
        totalPrice: 0,
    },
    {
        name: 'Bier',
        totalPrice: 0
    }, {
        name: 'Fris',
        totalPrice: 0
    },
    {
        name: 'Snacks',
        type: [{
            name: '8 Snacks',
            amountOfSnacks: 8,
            totalPrice: 0
        }, {
            name: '16 Snacks',
            amountOfSnacks: 16,
            totalPrice: 0,
        }]
    }
];




function invoiceCreation(name, amount, price) {
    this.name = name;
    this.amount = amount;
    this.total = '€' + amount * price;
}