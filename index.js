// Add your functions here
const map = function(arr, fn, fon ){
  return fn(arr)
}

let fn = function(arr){
  let empty = []
  arr.forEach(ar =>{
    return (empty.push(ar*-1));
  })
  return empty;
}
let fn = function(arr){
  let empty = []
  arr.forEach(ar =>{
    return (empty.push(ar*2));
  })
  return empty;
}
