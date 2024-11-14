let sum = 0
function find(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let avg = Math.round(sum / arr.length);
    return avg
}
console.log(find([14, 2, 3]));