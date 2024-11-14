//! Create
let hero = document.createElement("div");

let box1 = document.createElement("div");

let boxes = document.createElement("div");
let boxes1 = document.createElement("div");
let boxes2 = document.createElement("div");
let boxes3 = document.createElement("div");

let boxesImg1 = document.createElement("div");
let boxesImg2 = document.createElement("div");
let boxesImg3 = document.createElement("div");

let boxesInfo1 = document.createElement("div");
let boxesInfo2 = document.createElement("div");
let boxesInfo3 = document.createElement("div");

//! Class
hero.classList.add("hero");
box1.classList.add("box1");

boxes.classList.add("boxes");
boxes1.classList.add("boxes1");
boxes2.classList.add("boxes2");
boxes3.classList.add("boxes3");

boxesInfo1.classList.add("boxesInfo1");
boxesInfo2.classList.add("boxesInfo2");
boxesInfo3.classList.add("boxesInfo3");

boxesImg1.classList.add("boxesImg1");
boxesImg2.classList.add("boxesImg2");
boxesImg3.classList.add("boxesImg3");

//! Append
document.body.appendChild(hero);

hero.appendChild(box1);
hero.appendChild(boxes);



//! HTML
box1.innerText = "960 x 360px";

boxesImg1.innerText = "290 x 180px";
boxesImg2.innerText = "290 x 180px";
boxesImg3.innerText = "290 x 180px";

boxesInfo1.innerHTML = "<p>Indonectetus facilis</p>"
boxesInfo2.innerHTML = "<p>Indonectetus facilis</p>"
boxesInfo3.innerHTML = "<p>Indonectetus facilis</p>"

boxesInfo1.innerHTML = "<span>Indonectetus faciliasdm n askdjhs Indonectetus facilis Indonectetus facilis</span> <a href=''>Read More</a>"
boxesInfo2.innerHTML = "<span>Indonectetus faciliasdm n askdjhs Indonectetus facilis Indonectetus facilis</span> <a href=''>Read More</a>"
boxesInfo3.innerHTML = "<span>Indonectetus faciliasdm n askdjhs Indonectetus facilis Indonectetus facilis</span> <a href=''>Read More</a>"





boxes.appendChild(boxes1);
boxes.appendChild(boxes2);
boxes.appendChild(boxes3);

boxes1.appendChild(boxesImg1);
boxes2.appendChild(boxesImg2);
boxes3.appendChild(boxesImg3);

boxes1.appendChild(boxesInfo1);
boxes2.appendChild(boxesInfo2);
boxes3.appendChild(boxesInfo3);
