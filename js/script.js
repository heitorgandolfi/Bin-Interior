const links = Array.from(document.querySelectorAll("a"));
const testimonialDiv = Array.from(document.querySelectorAll(".testimonial__div"));
const testimonialParag = document.querySelector(".testimonial__parag");
const menu = document.querySelector(".menu");
const mobileBtn = document.querySelector(".btn__mobile");
const closeBtn = document.querySelector(".close__menu");

// Eventos

links.map((link, i) => link.addEventListener("click", (e) => {
    if (i === 5 || i === 6 || i === 7) {
        return true
    } else {
        prevDefault(e)
    }
}));

testimonialDiv.map((div, index) =>
    div.addEventListener("click", () => {
        if (index === 0) {
            testimonialParag.innerHTML = `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet`
        } else if (index === 1) {
            testimonialParag.innerHTML = `Mollit amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
        } else {
            testimonialParag.innerHTML = `Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Velit officia consequat duis enim velit mollit.`
        }
        testimonialDiv[index].style.opacity = "initial";
    }
    ))

mobileBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

// Funções

function prevDefault(e) {
    e.preventDefault()
}

function toggleMenu() {
    menu.classList.toggle("active")
}
