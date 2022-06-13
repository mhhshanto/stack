function cur(a){
  return function(b){
    return function (c){
      return a+b+c;
    }
  }
}
var result = cur(3)(4)(6)
console.log(result);