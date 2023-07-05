let nos=[1,2,3,4,5];
console.log("initially nos are:",nos);
nos.shift();
console.log("Nos after shift:",nos);
nos.unshift(1);
console.log("Nos after unshift:",nos);
nos.splice(3,2);
console.log("Nos after splice deletion",nos);
//insert elements in between using splice
nos.splice(2,2,7,8);
console.log("Nos after splice addition:",nos);
f=["a","b","c"];
console.log(f);
f.splice(1,1,"d","e","f"); 
console.log("Nos after addition:",f);