//var 1 pet_preferito = 'gatto';
//console.log(1 pet_preferito);

/*var pet = 'gatto';
var Pet = 'cane';*/
var petPreferito = 'balena';
var PetPreferito = 'coniglio';

var $pet = 'giraffa';
console.log($pet);
var _pet = 'leone';
console.log(_pet);
var _pet2 = 'pantera';
console.log(_pet2);

//var 12 = 'numero';

document.getElementById("animali").innerHTML = "<b>Il mio animale preferito è </b>";


var ss = petPreferito; //se l'animale sarà di sesso femminile il risultato sarà "la + animale", se di sesso maschile "il + animale"

var f = 'la'
var m = 'il'

if(ss[ss.length-1] == 'a'){
    document.write(f + ' ' + ss) 
}else{
    document.write(m + ' ' + ss); 
}