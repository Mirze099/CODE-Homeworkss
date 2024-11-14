function find(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (b % a[i] !== 0) {
            return false
        }
    }
    return true
}

console.log(find([1, 5, 4], 12));
