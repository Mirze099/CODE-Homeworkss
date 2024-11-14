function find(a, b) {
    let sum = 0
    for (let i = 0; i <= a.length; i++) {
        if (b % a[i] == 0) {
            sum += a[i]
        }
    }
    return sum == b;
}

console.log(find([1, 2, 3], 4));
