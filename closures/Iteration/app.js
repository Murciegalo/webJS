console.log('works');
//Instructions
// 1. Given an array
// 2. A function will have to print to the console all items based on next  order:
//  Index 0 is print first . lastIndex after and then one after the other from right side
function run(x){
  let i = -3;
  return function(){
      i += 3;
      return x[i % 4];
    }
}

let f = run( [4, 8, 1, 3] );

console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
