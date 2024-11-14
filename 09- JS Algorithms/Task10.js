function find(letter, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += letter
    }
    return result
}

console.log(find('M', 5));