var obj = {
  name: 'shanto',
  roll: 34,
  home: "mymensingh"
}
obj.home =10
delete obj.name
console.log(obj);
console.log(JSON.stringify(obj));