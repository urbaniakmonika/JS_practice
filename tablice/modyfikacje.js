let names = ['Kasia', 'Gosia', 'Ania', 'Basia'];

console.log(names)
console.log(names.includes('Ewelina'));
names.push("Aneta");
names.push("Zosia");
console.log(names);
names.pop();
console.log(names);
console.log(names.length);

names.shift();
console.log(names);
names.unshift("Justyna")
console.log(names);

names.splice(2,0, "Zuzia");
console.log(names);

let arr1 = [1,2,3,4];
let arr2 = [3,4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

console.log(arr3.sort((a, b) => a - b));

let uniqueArr = [...new Set(arr3)];
console.log(uniqueArr);
