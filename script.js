var drinkPrice = [2.30, 3.00, 2.50]; //Array van prijzen. 
 
var frisAantal = 0; //Variables die aantal keer een bepaald drankje bijhoud. 
var bierAantal = 0;
var wijnAantal = 0;

var bierAantalQeust = 0;
var frisAaantalQeust = 0;
var wijnAantalQeust = 0;


alert("Welkomn bij Cafe-bar");
function order(){
    var orderStart = prompt("Welke bestelling wilt u toevoegen?");
    orderStatus = true;
    while(orderStatus == true){
        if(orderStart == "stop"){
            if(frisAantal == 0 && bierAantal == 0 && wijnAantal == 0){
                alert("U heeft geen rekening openstaat bedankt voor het komen!")
            }else{
                alert("Hierbij de rekening");
            }
            orderStatus = false;
        }else{
            if(orderStart == "fris"){
                var frisAaantalQeust = prompt("Hoeveel fris wilt u bestellen?");
                frisAantal = parseInt(frisAaantalQeust);
                if(frisAantal == 0){
                    alert("Let op u heeft geen fris toegevoegd.")
                }else if(frisAantal > 0){
                    alert(frisAantal + "x toegevoegd.")
                    order()
                }
            }else if(orderStart == "bier"){
                var bierAantalQeust = prompt("Hoeveel bier wilt u bestellen?");
                bierAantal = parseInt(bierAantalQeust)
                if(bierAantal == 0){
                    alert("Let op u heeft geen fris toegevoegd.")
                }else if(bierAantal > 0){
                    alert(bierAantal + "x toegevoegd.")
                    order()
                }
            }else if(orderStart == "wijn"){
                var wijnAantalQeust = prompt("Hoeveel wijn wilt u bestellen?");
                wijnAantal = parseInt(wijnAantalQeust)
                if(wijnAantal == 0){
                    alert("Let op u heeft geen fris toegevoegd.")
                }else if(wijnAantal > 0){
                    alert(wijnAantal + "x toegevoegd.")
                    order()
                }
            }
        }
    }

}
order()
