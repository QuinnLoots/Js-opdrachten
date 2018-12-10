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
let b=2;
let a;
a=b++;
a=++b;
a=b--;
a=--b;
a+=b++;
a=1; a+=++b;
a=1; a-=b++;
a=1; a-=++b;
a=1; a+=b--;
a=1; a+=--b;
}

