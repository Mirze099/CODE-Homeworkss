function find(a) {
    if (a % 7 == 0) {
        return 'Eded 7 ye bolunur'
    } else {
        let lower = a - (a % 7);
        let upper = lower + 7;
        if (Math.abs(a - lower) < Math.abs(a + upper)) {
            console.log(lower);
        } else {
            console.log(upper);
        }
    }
}
console.log(find(22));