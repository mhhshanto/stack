function re(n){
  if(n === 0){
    return
  }
  console.log("rony putkimara khai ",n," bar");
  re(n-1)
}

re(1000)