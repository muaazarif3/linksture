// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


let services = document.getElementById("serviceid");
let serClass = document.getElementById("serviceclass");
let innerSer = document.querySelector(".services-inner");
let navLinkAfter = document.querySelector(".navlink a:nth-of-type(2)");
let NavClass = document.querySelectorAll(".navlink a:not(:nth-child(2))");
let start = document.getElementById("start");
let closeX = document.querySelector(".absb");
let fullCr = document.querySelector(".fullCr");
let usH2 = document.querySelector(".letUs h2");
let usH3 = document.querySelectorAll(".letUs h3 a");
let spanH2 = document.querySelectorAll(".transform h2 span")
let workLine = document.querySelector(".h-2");
let provide = document.querySelector(".provide");
let rellax = new Rellax('.rellax');
let headerClass = document.querySelector(".header");
let prevScrollY = 0;

window.onscroll = () => {
    innerSer.classList.remove('active');
    serClass.classList.remove('active');
    navLinkAfter.classList.remove('active');  
    provide.classList.remove("active");
    usH2.classList.remove("active");
    smallHover.classList.remove("active");
    icons.classList.remove("open");
    smallnav.classList.remove("active")
    usH3.forEach(e => {
        e.classList.remove('active');
    });
    workLine.classList.remove("active");

    if (window.scrollY > prevScrollY) {
        headerClass.classList.add("active");
    } else {
        headerClass.classList.remove("active");
    }
    prevScrollY = window.scrollY;
}

services.addEventListener("mouseover", () => {
    event.stopPropagation();
    serClass.classList.add('active');
    innerSer.classList.add('active');
    navLinkAfter.classList.add('active');
});
NavClass.forEach(e => {
    e.addEventListener("mouseover", () => {
        innerSer.classList.remove('active');
        serClass.classList.remove('active');
        navLinkAfter.classList.remove('active');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let footer = document.querySelector(".link-footer");

    const workObserver3 = new IntersectionObserver((entries, observer) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
            footer.classList.add("active");
        } else {
            footer.classList.remove("active");
        }
    }, {
        root: null,
        threshold: 0
    });

    workObserver3.observe(footer);
});




start.addEventListener('click', () => {
    
    provide.classList.add("active")
    usH2.classList.add("active");
    usH2.classList.remove("removeactive");
    fullCr.classList.add('active');
    usH3.forEach(e => {
        if (e.classList.contains('active')) {
            e.classList.remove('active');
            e.classList.add('removeactive');
        } else {
            e.classList.remove('removeactive');
            e.classList.add('active');
        }
    });
    workLine.classList.add("active");
    headerClass.style.zIndex = "0"
})
closeX.addEventListener("click", () => {
    provide.classList.remove("active");
    usH2.classList.add("removeactive");
    usH2.classList.remove("active");
    usH3.forEach(e => {
        if (e.classList.contains('active')) {
            e.classList.remove('active');
            e.classList.add('removeactive');
        } else {
            e.classList.remove('removeactive');
            e.classList.add('active');
        }
    });
    workLine.classList.remove("active");
    headerClass.style.zIndex = "9"

    setTimeout(function () {
        fullCr.classList.remove('active');
    }, 250);
})
const icons = document.querySelector('.icon');
let smallHover = document.querySelector('.smallHover');
let smallnav = document.querySelector(".small-nav")
icons.addEventListener('click', () => {
    icons.classList.toggle("open");
    smallHover.classList.toggle("active");
    setTimeout(function () {
        smallnav.classList.toggle("active")
    }, 1000);
});
let plusClick = document.querySelector("#plusClick");
let plusActive = document.querySelector(".plus-active");

plusClick.addEventListener("click", () => {
    plusActive.classList.toggle("active");
    if (plusActive.classList.contains("active")) {
        plusClick.textContent = "-";
    } else {
        plusClick.textContent = "+";
    }
});
let smallGet = document.querySelector("#small-get");
let smallStart = document.querySelector(".small-start");
smallGet.addEventListener("click", () => {
    smallStart.classList.add("active");
})

let cloX = document.querySelector(".absb1");
cloX.addEventListener("click", () => {
    smallStart.classList.remove("active");
})



let parallax = document.querySelector(".parllex");
let rightCircle = document.querySelector(".rightCircle");


const workObserver = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
        parallax.classList.add("parallex-active");
        spanH2.forEach(e => {
            e.style.animationPlayState = "running";
        });
        rightCircle.classList.add("active");
    }

}, {
    root: null,
    threshold: 0
});

workObserver.observe(parallax);



let year = document.querySelector(".year");
let pro = document.querySelectorAll(".production span")

const  workObserver1 = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
        pro.forEach(e => {
            e.style.animationPlayState = "running";
        });
}

}, {
    root: null,
    threshold: 0
});

workObserver1.observe(year);


// Add this script after including Bootstrap and your HTML content

let carousel = document.getElementById("carouselExampleFade");
carousel.addEventListener("slide.bs.carousel", function (event) {
    var items = event.target.querySelectorAll(".custom-carousel-item");
    items.forEach(function (item) {
        item.style.opacity = "0.5"; // Set opacity for non-active slides
    });
});

carousel.addEventListener("slid.bs.carousel", function (event) {
    var activeItem = event.relatedTarget;
    activeItem.style.opacity = "1"; // Set opacity for active slide
});

const container = document.querySelector(".container2");
const sections = gsap.utils.toArray(".container2 section");


let scrollTween = gsap.to(sections, {
    xPercent: -95 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container2",
        pin: true,
        scrub: 1,
        end: "+=1000",
        debug: false,
    }
});


const backChanges = document.querySelectorAll('.col[data-name^="hover"]');
const backSection = document.querySelector('.fullsecrollsection');

function handleMouseOver(event) {
    backSection.style.backgroundColor = event.currentTarget.dataset.color;
}

function handleMouseOut(event) {
    backSection.style.backgroundColor = '#1f1f1f';
}

backChanges.forEach(element => {
    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);
});

const colElements = document.querySelectorAll('.col');
const cursorElements = document.querySelectorAll('.cursor');


cursorElements.forEach(cursor => {
    cursor.style.opacity = 0;
    cursor.style.transition = 'transform 0.15s ease-out';
});


colElements.forEach(col => {
    const cursor = col.querySelector('.cursor');

    col.addEventListener('mouseover', () => {
        cursor.style.opacity = 1;
    });

    col.addEventListener('mouseout', () => {
        cursor.style.opacity = 0;
    });

    col.addEventListener('mousemove', e => {
      
        const cursorX = e.clientX - col.getBoundingClientRect().left - cursor.clientWidth / 2;
        const cursorY = e.clientY - col.getBoundingClientRect().top - cursor.clientHeight / 2;
        cursor.style.transform = `translateX(${cursorX}px) translateY(${cursorY}px)`;
    });
});


    

//function courserMouseOut(event) {
//    cursor.style.opacity = 0;
//}

//backChanges.forEach(element => {
//    element.addEventListener("mouseover", courserMouseOver);
// /*   element.addEventListener("mouseout", courserMouseOut);*/
//});





let sectionOpacity = document.querySelector('.section-center');
let phPara = document.querySelector(".Ph2para");
const workObserver4 = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
        backSection.classList.add("active");
        setTimeout(function () {
            sectionOpacity.classList.add("active");
            phPara.classList.add("active");
        }, 1000);
    }

}, {
    root: null,
    threshold: 0
});

workObserver4.observe(backSection);





