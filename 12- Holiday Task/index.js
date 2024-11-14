let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

//! Slider
let leftArrow = document.querySelector(".fa-chevron-left");
let rightArrow = document.querySelector(".fa-chevron-right");
leftArrow.addEventListener("click", () => prevSlide());
rightArrow.addEventListener("click", () => nextSlide());

let slides = document.querySelectorAll(".hero-slider");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 3000);
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((element) => {
        element.classList.remove("displaySlide");
    });


    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

//! Accordion
let accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

let childrenArr = [
    {
        id: 0,
        image: "https://preview.colorlib.com/theme/adopted/img/children_2.jpg",
        name: "Jessa",
        age: 13,
    },
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/adopted/img/children_5.jpg",
        name: "Marko",
        age: 14,
    },
    {
        id: 2,
        image: "https://preview.colorlib.com/theme/adopted/img/children_3.jpg",
        name: "Jankovic",
        age: 12,
    },
];


let name = document.querySelector(".name");
let age = document.querySelector(".age");
let img = document.querySelector(".img");
let childForm = document.querySelector(".child-form");
let childCards = document.querySelector(".child-cards");

document.addEventListener("DOMContentLoaded", ShowProducts(childrenArr));

function ShowProducts(myProducts) {
    childCards.innerHTML = ""
    myProducts.forEach(myProducts => {
        childCards.innerHTML += `
        <div class="child-card">
                        <div class="child-img">
                            <img src="${myProducts.image}" alt="">
                            <div class="child-img-overlay"></div>
                        </div>
                        <div class="child-card-parag">
                        <p>${myProducts.name}</p>
                        <p>${myProducts.age}</p>
                        </div>
                        <div class="child-card-btns">
                            <button class="child-card-btn-details" data-id=${myProducts.id}>Details</button>
                            <button class="child-card-btn-delete" data-id=${myProducts.id}>Remove</button>
                        </div>
                        </div>`

        let deleteBtn = document.querySelectorAll(".child-card-btn-delete");
        deleteBtn.forEach(deleteBtn => {
            deleteBtn.addEventListener("click", () => {
                let id = deleteBtn.getAttribute("data-id");
                let findedChild = childrenArr.find(childrenArr => childrenArr.id == id);
                let index = childrenArr.indexOf(findedChild);
                childrenArr.splice(index, 1);
                ShowProducts(childrenArr)
            })

            let detailsBtn = document.querySelectorAll(".child-card-btn-details");
            detailsBtn.forEach(detailsBtn => {
                detailsBtn.addEventListener("click", () => {
                    let id = detailsBtn.getAttribute("data-id");
                    let findedChild = childrenArr.find(childrenArr => childrenArr.id == id);

                    Swal.fire({
                        title: `${findedChild.name}`,
                        text: `${findedChild.age}`,
                        imageUrl: `${findedChild.image}`,
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: "Custom image"
                    });
                })
            })
        });

    })
};


childForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (name.value.trim() != "" && age.value.trim() != "" && img.value.trim() != "") {
        let id = crypto.randomUUID();
        let newChildrenArr = {
            id: id,
            image: img.value,
            name: name.value,
            age: age.value,
        }
        childrenArr.push(newChildrenArr);
        ShowProducts(childrenArr)
        name.value = "";
        age.value = "";
        img.value = "";
        Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Inputlari doldurun!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
});

let sortBtn = document.querySelectorAll(".child-sort-btn");
sortBtn.forEach(sortBtn => {
    sortBtn.addEventListener("click", () => {
        childrenArr.sort((a, b) => a.age - b.age);
        ShowProducts(childrenArr)

    })
});

let search = document.querySelector(".search");
let searchBtn = document.querySelectorAll(".child-search-btn");
searchBtn.forEach(searchBtn => {
    searchBtn.addEventListener("click", () => {
        let filteredArr = childrenArr.filter(child =>
            child.name.toLowerCase().includes(search.value.toLowerCase())
        )
        ShowProducts(filteredArr)
    })
});

let successArr = [
    {
        image: "https://preview.colorlib.com/theme/adopted/img/work_thumb_1.jpg",
        text: "Being loved has tought me how to love",
    },
    {
        image: "https://preview.colorlib.com/theme/adopted/img/work_thumb_2.jpg",
        text: "Becoming perfect parent out of inperfect",
    },
    {
        image: "https://preview.colorlib.com/theme/adopted/img/work_thumb_3.jpg",
        text: "Home sweet home",
    },
];

let storiesCards = document.querySelector(".stories-cards");

document.addEventListener("DOMContentLoaded", ShowSuccessCards());

function ShowSuccessCards() {
    successArr.forEach(
        (card) =>
        (storiesCards.innerHTML +=
            `<div class="stories-card">
                        <div class="stories-card-img">
                            <img src=${card.image} alt="">
                            <div class="stories-img-overlay">
                                <span>+</span>
                                <p>${card.text}</p>
                            </div>
                        </div>
                    </div>`)
    );
}