function find(madde, yagliMadde) {
    let cetinlik;
    let saglamliq;

    if (madde > 10) {
        cetinlik = "cetin";
    } else if (madde >= 5 && madde <= 10) {
        cetinlik = "orta";
    } else {
        cetinlik = "asan";
    }

    if (yagliMadde > 3) {
        saglamliq = "Saglam deyil";
    } else if (yagliMadde >= 1 && yagliMadde <= 3) {
        saglamliq = "Orta Saglam";
    } else {
        saglamliq = "Saglam";
    }

    return { cetinlik, saglamliq };
}

console.log(find(5, 3));
