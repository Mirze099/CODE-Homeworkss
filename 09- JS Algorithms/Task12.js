function find(bal, fealiyyet) {
    let bonus = 0;
    if (bal >= 85 && fealiyyet > 3) {
        bonus = 5;
    } else if (bal >= 70 && bal <= 84 && fealiyyet >= 2) {
        bonus = 3;
    } else if (bal >= 60 && bal <= 69 && fealiyyet >= 1) {
        bonus = 2;
    }
    let finalBal = bal + bonus;

    if (finalBal > 100) {
        finalBal = 100;
    }

    return finalBal;
}

console.log(find(65, 7));

