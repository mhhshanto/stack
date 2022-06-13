// function recur (n){
//   if(n === 0){
//     return
//   }
//   console.log("done",n);
//   recur(n-1)
// }
// recur(100)
var result = 0;
function sum (n){
  
  if(n=== 0){
    return
  }
  
  result += n
  console.log(result);
  sum(n-1)
}

sum(5)