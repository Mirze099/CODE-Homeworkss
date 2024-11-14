function find(a) {
    if (a == 1) {
        return "Yanvar"
    }
    else if (a == 2) {
        return "Fevral"
    }
    else if (a == 3) {
        return "Mart"
    }
    else if (a == 4) {
        return "Aprel"
    }
    else if (a == 5) {
        return "May"
    }
    else if (a == 6) {
        return "Iyun"
    }
    else if (a == 7) {
        return "Iyul"
    }
    else if (a == 8) {
        return "Avqust"
    }
    else if (a == 9) {
        return "Sentyabr"
    }
    else if (a == 10) {
        return "Oktyabr"
    }
    else if (a == 11) {
        return "Noyabr"
    }
    else if (a == 12) {
        return "Dekabr"
    } else {
        return "Invalid Input"
    }
}

console.log(find(42));
