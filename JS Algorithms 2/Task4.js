let fruits = ["alma", "banan", "qarpız", "portağal", "ananas", "nar"];
let sum = "";
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length > sum.length) {
        sum = fruits[i];
    }
}
console.log(sum);
