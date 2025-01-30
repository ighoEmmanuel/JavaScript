let user = {
	firstName : "Esther",
	lastName : "jobless",
	age  : 12,
	greet : function(){
			return ("hello")
		}
};
console.log();
console.log(user.greet());

console.log();
console.log();
let values = Object.values(user);
let  keys = Object.keys(user);

console.log(keys);
console.log();
console.log();
console.log(values);

let entries = Object.entries(user);
console.log();
console.log();
console.log(entries);
console.log();

for(let index = 1; index < 11; index++){
	console.log(index);
}

const numbers = [1,2,3,4,5];
console.log();
for(let number of numbers){
	if(number > 2){
		number  = 5;
	}
	console.log(number);
}
console.log();

for(let index in numbers){
	console.log(index);
	console.log(numbers[index]);
	console.log(" ");
}

const userProfile = {
	name : "Gloria",
	age : 314
}

for(let index in userProfile){
 console.log(index + " " + userProfile[index]);
 console.log(" ");
}
