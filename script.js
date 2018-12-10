//oefening 1
//let naam = "Quinn"
//alert( naam);

//oefening 2
//let name = "Doe";
//let firstname = "John";
//let city = "New-York";

//alert("Name: "+name + "\nFirstname: "+ firstname + "\nCity: "+ city);

//oefening 3
//let person = prompt("Geef u voornaam in: ");
//alert("Hallo, "+ person);

//oefening 4
//function buttonFunction1() {
//let name = document.getElementById("name").value;
//let firstname = document.getElementById("firstName").value;
//let city = document.getElementById("city").value;
//alert("Name: "+name + "\nFirstname: "+ firstname + "\nCity: "+ city);
//}

//oefening 5
//function buttonFunction2() {
//let getal1 = document.getElementById("firstNumber").value;
//let getal2 = document.getElementById("secondNumber").value;
//alert(getal1*getal2);
//}

//oefening 7

//function myFunction() {
//    let a = document.getElementById("height").value;
//    let b = document.getElementById("birthdate").value;

 // a=a*2;
 // a=a+5;
 // a=a*50;
 //a=a-b;
 // a=a+1766;
 // alert(a);
//}

//oefening 8
function checkAge(){
let leeftijd = document.getElementById("age").value;
if(leeftijd>=18){
  alert("u bent meerderjarig");
}else{
 alert("u bent minderjarig");
}
}