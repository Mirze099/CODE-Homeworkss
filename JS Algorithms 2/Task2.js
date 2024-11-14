let num = 6;
let sum = 0;
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        sum++;
    }
}
console.log(sum);