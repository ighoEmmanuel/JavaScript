const person = {
		name : "Emmanuel",
		age : 15,
		sex : "Male",
		complexion : "Dark",
		stateOfOrigin : "Delta",
		country: "Nigeria"
}

function getElements(input) {
   let element = "";
    for (let key in input) {
        element += (`${key}: ${input[key]}\n`);
    }
	return element
}

const car = {make:"Toyyota", model:"Camry",year:2021};
console.log();
console.log(getElements(car))


const latop = {brand :"dell",price : 1200};

latop.colour = "blue"
console.log();
console.log(latop);

const phone = {brand :"Apple" , price : 999}

phone.price  = 1500
console.log();
console.log(phone);


const names = {
		firstName : "Emmanuel",
		lastName : "Igho",
};

function fullName(input) {
    let name = "";
    for (let key in input) {
        name += input[key] + " ";
    }
    return name;
}

console.log(fullName(names));

function fullInfo(input){
let info = "";
for(let key in input){
	info += key + ":"+input[key] +",";
}
	return info;
}
const persons  = {
		firstName : "Emmanuel",
		lastName : "Igho",
		age : 15

}

console.log(fullInfo(persons))



var prompt = require('prompt-sync')();
//
// get input from the user.
//
var n = prompt('How many more times? ');
