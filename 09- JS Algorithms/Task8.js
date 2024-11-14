function find(a) {
    let sum = 0
    if (a < 50) {
        for (let i = 0; i <= a; i++) {
            if (i % 3 == 0) {
                sum++
            }
        }
    } else if (a > 50 && a < 100) {
        for (let i = 0; i < a; i++) {
            if (i % 5 == 0) {
                sum++
            }
        }
    } else {
        for (let i = 0; i <= a; i++) {
            if (i % 8 === 0) {
                sum++;
            }
        }
    }
    return sum
}

console.log(find(15));