function find(a, b) {
    let num
    for (let i = 0; i < a.length; i++) {
        if (a[i] < b) {
            if (a[i] > a[i - 1]) {
                num = a[i];
            }
        }
    }
    return num;
}

console.log(find([15, 5, 35, 44, 60, 9], 45));