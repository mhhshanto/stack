var arr = [2,3,4,5,6,7,8]
var newA = arr.filter(function(value){
  return value % 2 === 0;
})
console.log(newA);