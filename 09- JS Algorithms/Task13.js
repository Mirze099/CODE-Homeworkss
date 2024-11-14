function find(mebleg, premium) {
    let catdirilmaGunu
    let catdirilmaQiymeti
    if (premium) {
        catdirilmaGunu = 1;
        catdirilmaQiymeti = 0;
    }
    else if (mebleg > 150) {
        catdirilmaGunu = 2;
        catdirilmaQiymeti = 0;
    }
    else if (mebleg >= 100 && mebleg <= 150) {
        catdirilmaGunu = 3;
        catdirilmaQiymeti = 20;
    }
    else {
        catdirilmaGunu = 5;
        catdirilmaQiymeti = 30;
    }
    return { catdirilmaGunu, catdirilmaQiymeti };
}

console.log(find(200, false));
