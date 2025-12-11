/*
let sales = [34, 21, 45, 30, 45, 28, 45];

1️. Wypisz wszystkie wyniki sprzedaży w formacie:
    Dzień X – sprzedano Y sztuk
2. Znajdź najwyższą sprzedaż
3️. Wypisz wartość najwyższej sprzedaży.
4️. Znajdź wszystkie dni, w których sprzedaż była najwyższa.
5️. Policz i wypisz średnią sprzedaż.
6️. Policz, ile dni było powyżej średniej.
*/

let sales = [0, 34, 21, 45, 30, 45, 28, 45];
let maxSale = 0;
let daysMaxSale = [];

for (let i =0; i < sales.length; i++) {
    console.log("Dzień "+ i + " sprzedano: "+ sales[i]+ " sztuk");
    if (maxSale < sales[i]) {
        maxSale = sales[i]
    }
    
}
console.log("Najwyższa sprzedaż: "+ maxSale + " sztuk");

for (let i=0; i < sales.length; i++) {
    if (maxSale === sales[i]) {
        daysMaxSale.push(i);
    }
}

console.log("Dni, w których sprzedaż była najwyższa: "+ daysMaxSale);

let average = getAverage(sales);
let countAboveAverage = 0;

function getAverage(sales) {
  let sum = 0;
  for (let i = 0; i < sales.length; i++) {
    sum += sales[i];
  }
  return (sum / sales.length);
}

console.log("Średnia sprzedaż wynosi: " + average);


for (let i = 0; i< sales.length; i++) {
    if (sales[i] > average) {
        countAboveAverage++;
    }
}
console.log("Ilość dni powyżej sprzedaży średniej: "+ countAboveAverage);

