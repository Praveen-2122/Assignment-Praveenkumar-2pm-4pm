// Combine two arrays using concat() or spread syntax [...a, ...b].

let gear1 = ["Helmet", "boot"];
let gear2 = ["Glove", "jacket"];

let combined = gear1.concat(gear2);
console.log(combined);

let combined1 = [...gear1, ...gear2];
console.log(combined1);
