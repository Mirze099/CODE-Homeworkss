let num = 246;
let stringa = String(num);
let sum = 0;
let hasil = 1;
let avg
for (let i = 0; i < stringa.length; i++) {
    sum += Number(stringa[i]);
    hasil *= Number(stringa[i]);
    avg = sum / stringa.length;
}
console.log(avg);