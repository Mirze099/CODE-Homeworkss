let students = [
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Mammal", scores: [75, 80, 85] },
    { name: "Camil", scores: [90, 95, 85] },
    { name: "Davud", scores: [100, 100, 100] }];

// ! Task 6.1
let newArr = [];
let newStudent = students.map(student => {
    let sum = student.scores.reduce((total, value) => total + value, 0)
    let avg = sum / student.scores.length;
    newArr.push(avg);
})
sum = 0;
for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > sum) {
        sum = newArr[i];
    }
}
console.log(sum);


// ! Task 6.2
let up90 = newArr.filter(value => value > 90)
console.log(up90);


