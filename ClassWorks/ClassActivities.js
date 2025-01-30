function count(){
    let value = 0;
  
    return{
      increment : function(){
        return value++;
      },
      decrement : () =>{
        return value--;
      },
      getValue : function(){
        return value;
      }
    }
  };
  let counter = count();
  counter.increment();
  counter.increment();
  counter.decrement();
  console.log(counter.getValue());
  
  let firstName = "chinedu"
  
  function greet(name){
    return `Hello, ${name}`;
  }
  function executeFunction (callBack,userName){
    return callBack(userName);
  }
  
  let result = executeFunction(greet, firstName);
  
  console.log(result);

function counts(){
    let value = 0;

    function increaseValueByTwo(){
        let result = value  + 2
        console.log(result)
    }
    increaseValueByTwo()

}
counts()

var prompt = require('prompt-sync')();
//
// get input from the user.
//
var n = prompt('How many more times? ');
