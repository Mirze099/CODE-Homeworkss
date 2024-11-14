function find(word) {
    let vowels = ['a', 'i', 'o', 'u', 'e']
    let count = 0
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (word[i] == vowels[j]) {
                count++
            }
        }
    }
    return count
}

console.log(find('salam qaqa'));