// Check if a number is prime or not
//1. Prompt the user to input a whole number
//2. if the user does not provide a whole number, keep prompting the user to input a valid number until they provide one
//3. if the provided number is prime: Print the number is prime
//4. Otherwise print the number is not prime and print its smallest positive divisor other than 1.
// let number = parseInt(prompt('Please input a whole number'));

const primeChecker = function(arg){
  if(arg <= 1){console.log(`${arg} is not a prime number`);}
  if(Number.isInteger(arg)){
    for(let i = 2; i < arg;  i ++){
      let counter = 0;
      if(arg%i == 0){
        console.log(`Sorry but ${arg} is not a prime number`);
        break;
      }else{
        console.log(`${arg} is a prime number!!`);
      }
    }
  }else {
    console.log('Sorry , input a whole number');}
}
// primeChecker(number);
//-----------------------------------------------------------
const myPhone = {
  make: 'corc',
  model: 'coroco',
  warranty: 12,
  color: 'orange',
  ring: function(){
    console.log('beep beep beep!');
  }
};
const propertyGetter = function(obj){
    let selector = Math.floor(Math.random() * 5 +1);
    console.log(selector);
    let stock = Object.keys(obj);
    console.log(stock);
    let result = stock[selector];

    return obj[result];
}
propertyGetter(myPhone);
