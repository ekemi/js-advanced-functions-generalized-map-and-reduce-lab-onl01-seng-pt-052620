// Add your functions here
const map = function(arr, fn ){
  return fn(arr)
}

let fn = function(arr){
  let empty = []
  arr.forEach(ar =>{
    return (empty.push(ar*-1));
  })
  return empty;
}

const map = function(arr, f ){
  return f(arr)
}

let f = function(arr){
  let empty = []
  arr.forEach(ar =>{
    return (empty.push(ar*2));
  })
  return empty;
}
