function one(a){
  console.log(a);
}
function two(b){
  return b*8
}
function three(c,d){
  return c+d
}
one(two(three(5,3)))