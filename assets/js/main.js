/////////////////////////////////
// lev1_7: Coding Conventions //
///////////////////////////////
let helloworld = "Hello World";
const pi = 3.14;
const burjdubai = "828m";
let fullname = "Jan Schmidt";
const eifeltower = "324m";
let camelcase = "camelCase";
let kursstatus = true;

/////////////////////////////////
// lev1_1: console.log /////////
///////////////////////////////
let a = 12;
let b = a * 3;
console.log(b);
document.write("b= " + b);
console.log("Anton");
let firstName = "Anton";
console.log(firstName);
let age = 28;
console.log(age);
let job = "Trainer";
console.log(job);
let married = true;
console.log(married);
console.log(firstName + " ist " + age + " Jahre alt, von Beruf " + job + " und ist verheiratet: " + married);

/////////////////////////////////
// lev1_5: variables ///////////
///////////////////////////////
let carName = "BMW";
console.log(carName);
let x = 150;
console.log(x);
let y = 50;
console.log(y);
let z = x + y;
console.log(z);
// variablennamen wurden mit "_" abgeaendert, weil die variablen schon existierten
let first_Name;
let last_Name;
let Age;
first_Name = "John";
last_Name = "Doe";
Age = 35;
console.log(first_Name + last_Name + age);

/////////////////////////////////
// lev1_6: Let Const ///////////
///////////////////////////////
/* 
let xx = 34;
xx = 67;
console.log(xx); 
*/
/* 
const yy = 34;
yy = 67;
console.log(yy); 
//man kann eine const nicht überschreiben,im gegensatz zu let  
*/

/////////////////////////////////////////////////
// lev1_12: Arithmetische Operatoren ///////////
///////////////////////////////////////////////
let score1 = 5 + 5 * 10;
console.log("Ergebnis: " + score1);
let score2 = (5 + 5) * 10;
console.log("Ergebnis: " + score2);

let score3 = 0;
score3 = score3 + 10;
console.log('Ergebnis: ' + score3);
let score4 = 0
score4 += 10;
console.log('Ergebnis: ' + score4);

let zahl = 0;
zahl++;
console.log("increment: " + zahl);
zahl--;
console.log("decrement: " + zahl);

////////////////////////////////////////////////////
// lev1_13:  arithmetische Wiederholung ///////////
//////////////////////////////////////////////////
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);
let division_operator = 4 / 2;
console.log("division: " + division_operator);
let modulo_operator = 14 % 5;
console.log("modulo: " + modulo_operator);

///////////////////////////////////
// lev1_4: popup boxes ///////////
/////////////////////////////////

/* 
window.alert("Hallo Welt");
window.prompt("Bitte geben Sie Ihren Namen ein.");
window.prompt("Bitte geben Sie Ihren Namen ein", "Joe Doe");
window.confirm("Stimmen Sie meiner Meinung zu?"); 
 */

let alter = window.prompt("Gib mir bitte dein Alter:");
console.log(alter);
let bb = 5;
let aa = bb * 5 - 3;
window.alert(aa);
let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
window.confirm(mann + grosse);