var drinkPrice = [2.30, 3.00, 2.50];
console.log(drinkPrice);




function order(orderChoice){
    alert("Welke bestelling wilt u toevoegen?");
    var orderChoice = prompt("welk drankje wil je bestellen?, Je kunt fris, bier of wijn kiezen.");
    switch(orderChoice){
        case 'fris':
            alert('fris');
        break;
        case 'bier':
            alert('bier');
        break;
        case 'wijn':
            alert('wijn');
        break;
    }
}




order(orderChoice)