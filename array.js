var arr = [3, 7, 8, 88, 102, 2]

// for (var i = 0; i < arr.length; i++){
//     arr[i] +=  2
    
//   }
//   console.log(arr);
var sum = 0
for (var i = 0; i < arr.length; i++){
if(arr[i] % 2 == 1){
  sum += arr[i] 
}  
}
console.log(sum);