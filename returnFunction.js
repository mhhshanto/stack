// function greetings(greet){
//   function second(name){
//     return greet +","+name
//   }
//   return second
// }
// var msg = greetings("good morning")
// var final =msg("shanto")
// console.log("final: ", final);

function base(n){
  return function nex(b){
    var result = 1;
    for (let i=0; i<b; i++){
      result *= n
    }
    return result
  }
}
var base1 = base(5)
console.log(base1(4));
