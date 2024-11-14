let sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;

//! Task 3.1
let sum = 0;
for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i] === " ") {
        sum++;
    }
}
console.log(sum);



//! Task 3.2
let sum1 = 0;
for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i] === "," || sampleNews[i] === ".") {
        sum1++;
    }
}
console.log(sum1);



//! Task 3.3
let sum2 = 0;
for (let i = 0; i < sampleNews.length; i++) {
    if ((sampleNews.charCodeAt() >= 65 && sampleNews.charCodeAt() <= 90) || (sampleNews.charCodeAt() >= 97 && sampleNews.charCodeAt() <= 122)) {
        sum2++;
    }
}
console.log(sum2);



//! Task 3.4
let sum3 = 0;
let splitedMetn = sampleNews.split(" ");
console.log(splitedMetn.length);
