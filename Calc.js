function message(name)
{
alert ("Ram Dayal, Welcome to JS")
console.log("your Good Name: "+ name)
}
message ("Ram Dayal Kumar");

function sum(a,b){
    console.log("Sum: "+ (a+b));
}
let x = parseInt(prompt("Enter First No."));
let y = parseInt(prompt("Enter Second No."));
add(x,y);
add(5,10);
add(66,33);


function sum(){
    let x = parseInt(prompt("Enter First No."));
    let y = parseInt(prompt("Enter Second No."));
    // alert ("Sum of two No:" + (x+y));

    document.getElementById("sum").innerHTML="Sum of two No:"+(x+y);
}
function sub(){
    let x = parseInt(prompt("Enter First No."));
    let y = parseInt(prompt("Enter Second No."));
    // alert ("Sum of two No:" + (x+y));
    document.getElementById("sub").innerHTML="Sum of two No:"+(x-y);
}
function mul(){
    let x = parseInt(prompt("Enter First No."));
    let y = parseInt(prompt("Enter Second No."));
    // alert ("Sum of two No:" + (x+y));
    document.getElementById("mul").innerHTML="Sum of two No:"+(x*y);
}
function div(){
    let x = parseInt(prompt("Enter First No."));
    let y = parseInt(prompt("Enter Second No."));
    // alert ("Sum of two No:" + (x+y));
    document.getElementById("div").innerHTML="Sum of two No:"+(x/y);
}