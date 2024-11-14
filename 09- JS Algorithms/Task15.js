function find(yas, gelir) {
    if (yas >= 25 && yas <= 40 && gelir >= 5000) {
        return "Muraciet Uygundur"
    } else if (yas > 40 && gelir >= 7000) {
        return "Muraciet Uygundur"
    } else if (yas < 25 && gelir >= 10000) {
        return "Muraciet Uygundur"
    } else {
        return "Muraciet Redd Edilir"
    }
}

console.log(find(24, 10000));
