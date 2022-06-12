function sum (a,b,cb){
  c = a+b;
  d = a-b;
  return cb(c,d)
}
sum (8,5,function (c,d){
  console.log(c+d);
})