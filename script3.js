function surfaceRectagle(){
    let breedte = prompt("geef breedte in: ");
    let lengte = prompt("geef lengte in: ");

    alert("De oppervlakte is: " + breedte*lengte);
}

function perimeterRectangle(){
    let breedte = prompt("geef breedte in: ");
    let lengte = prompt("geef lengte in: ");
    alert("De omtrek is: " + ((parseInt(breedte)+parseInt(lengte))*2));
}

function surfaceCircle(){
    let straal = prompt("geef straal in: ");
        alert("De oppervlakte is: " + straal * straal * Math.PI);

}

let a = 3 ;
let b = 2 ;

function tripple(x){
return (x*3);
}

function display(){
    alert(tripple(a));
    alert(tripple(b));
}

let tab = [-2,1,4];
function add(x){
    return (x+2);
}
function display2(){
    alert(add(tab[0]));
    alert(add(tab[tab.length-1]));
}

function bereken(){
let a=0;
let b=2;
a=b++;
alert("a: "+a+"\nb: "+b);

a=0;
b=2;
a=++b;
alert("a: "+a+"\nb: "+b);


a=0;
b=2;
a=b--;
alert("a: "+a+"\nb: "+b);


a=0;
b=2;
a=--b;
alert("a: "+a+"\nb: "+b);


a=0;
b=2;
a+=b++;
alert("a: "+a+"\nb: "+b);


a=1;
b=2;
a+=++b;
alert("a: "+a+"\nb: "+b);


a=1;
b=2;
a-=b++;
alert("a: "+a+"\nb: "+b);

a=1;
b=2;
a-=++b;
alert("a: "+a+"\nb: "+b);


a=1;
b=2;
a+=b--;
alert("a: "+a+"\nb: "+b);

a=1;
b=2;
a+=--b;
alert("a: "+a+"\nb: "+b);
}


let tab2 = [-2,1,4];
function subtract(x){
    let result = x-tab2[0];
    if (result <0){
        alert("getal is negatief");
    } else{
        alert("getal is positief");
    }
    return (result);
}

function display2(){
alert(subtract(tab2[0]));
alert(subtract(tab2.length-1));
    
}

function makeChoice(){
    let keuze = prompt("geef 1,2 of 3 in: ");
    switch (parseInt(keuze)) {
    case 1:
        alert("1. Thank you");
        break;
    case 2:
        alert("2. Hello");
        break;
    case 3:
        alert("3. Good bye");
        break;
    default: 
        alert("Excuse me, what do you want?");
}
}

function weekday(){
    let d = new Date();
    let n = d.getDay();
    
    switch (n){
        case 1:
            alert("Maandag");
            break;
        case 2:
            alert("Dinsdag");
            break;
        case 3:
            alert("Woensdag");
            break;
        case 4:
            alert("Donderdag");
            break;
        case 5:
            alert("Vrijdag");
            break;
        case 6:
            alert("Zaterdag");
            break;
        case 0:
            alert("Zondag");
            break;
    }

}

function testWhile(){
    let str = "";
    let n = false;
    while (!n) {
        str = prompt("geef eens string met p in");
        n = str.includes("p");
}
    alert(str);
}

let som=0;
function sum(){
    for (let i = 0; i < 3; i++) { 
    getal = prompt("geef eens getal in: ");
    som = parseInt(som) + parseInt(getal);  
}
    alert(som);
}

let getallen=[];
let gem =0;
let totaal = 0;
function calcAverage(){
    let getal = parseInt(prompt("geef een geheel getal in: "));
    while (getal>=0){
        while (getal%1 != 0) {
            alert("geef een GEHEEL getal in !");
            getal = parseInt(prompt("getal: "));
        }
        getallen.push(getal);
        getal = parseInt(prompt("geef een geheel getal in: "));
    }
    alert("totaal aantal getallen: "+getallen.length);
    for (let i = 0; i < getallen.length; i++){
        totaal = totaal + getallen[i];
    }
    gem = totaal/getallen.length;
    alert("gemiddelde: "+gem);
}

function temperatureConversion(){
alert("0: End of the program\n1: Celsius to Fahrenheit\n2: Celsius to Kelvin\n3: Fahrenheit to Celsius\n4: Fahrenheit to Kelvin\n5: Kelvin to Celsius\n6: Kelvin to Fahrenheit");
let keuze = parseInt(prompt("welk soort conversie wilt u?: "));
let temperatuur = parseInt(prompt("wat is de temperatuur: "));
let convertedtemp = 0;
switch (keuze){
        case 0:
            break;
        case 1: 
            convertedtemp = (temperatuur * 9/5) + 32;
            break;
        case 2:
            convertedtemp = temperatuur + 273.15;
            break;
        case 3:
            convertedtemp = (temperatuur - 32) / (9/5);
            break;
        case 4: 
            convertedtemp = ((temperatuur - 32) * (5/9)) + 273.15;
            break;
        case 5: 
            convertedtemp = temperatuur - 273.15;
            break;
        case 6: 
            convertedtemp = (temperatuur * 9/5) - 459.67;
            break;
}   
alert(convertedtemp);
}

function calcBMI(){
   let lengte = prompt("geef uw lengte (in m): "); 
   let gewicht = prompt("geef uw gewicht (in kg): "); 
   let bmi = (gewicht / (lengte * lengte));
   bmi = bmi.toFixed(2);
   alert("u BMI is: "+bmi);

   if (bmi < 16.5){
        alert("ondervoeding of hongersnood");
   } else if (bmi >= 16.5 && bmi < 18.5){
       alert("dunheid");
   } else if (bmi >=18.5 && bmi < 25){
       alert("normale bouw");
   } else if (bmi >=25 && bmi <30){
       alert("overgewicht");
   } else if (bmi >=30 && bmi <35){
       alert(" matige overgewicht");
   } else if (bmi >=35 && bmi < 40){
       alert("ernstige overgewicht");
   } else if (bmi >=40){
       alert("morbide obesitas");
   }

}




