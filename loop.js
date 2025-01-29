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

