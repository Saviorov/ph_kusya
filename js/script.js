const menu = [
    {
        id: 1,
        category: "Природа",
        img: "./images/header-image-one.jpg",
    },
    {
        id: 2,
        category: "Природа",
        img: "./images/header-image-two.jpg",
    },
    {
        id: 3,
        category: "Природа",
        img: "./images/header-image-three.jpg",
    },
    {
        id: 4,
        category: "Природа",
        img: "./images/header-image-one.jpg",
    },
    {
        id: 5,
        category: "Природа",
        img: "./images/header-image-one.jpg",
    },
    {
        id: 6,
        category: "Люди",
        img: "./images/header-image-one.jpg",
    },
    {
        id: 7,
        category: "Люди",
        img: "./images/header-image-one.jpg",
    },
    {
        id: 8,
        category: "Люди",
        img: "./images/header-image-one.jpg",
    },
    {
        id: 9,
        category: "Люди",
        img: "./images/header-image-one.jpg",
    },
    {
        id: 10,
        category: "Природа",
        img: "./images/header-image-one.jpg",
    },
    {
        id: 11,
        category: "Природа",
        img: "./images/header-image-one.jpg",
    },
    {
        id: 12,
        category: "Люди",
        img: "./images/header-image-one.jpg",
    },
];

// получаем родительский элемент

const sectionCenter = document.querySelector('.gallery__blocks');
const container = document.querySelector('.btn-container');

// загрузка айтемов
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});







function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article 
        class="gallery__block"> <img src=${item.img} class="gallery-image" data-fancybox="gallery" alt=${item.title} /> 
      </article>`
    })
    displayMenu = displayMenu.join('')
    sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values
    }, ['Все'])
    const categoryBtns = categories.map(function (category) {
        return `<button type="button" class="filter-btn button-51" role="button" data-id=${category}>${category}</button>`
    }).join('');
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');
    // сортировка айтемов по категориям
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {

                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem
                }
            });
            // console.log(menuCategory);
            if (category === 'Все') {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory)
            };
        });
    });
}



// Testimonial slider
function initParadoxWay() {
    "use strict";

    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                },

            }
        });
    }

    // bubbles -----------------
    // setInterval(function () {
    //     $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
    //     $('.individual-bubble').animate({
    //         'bottom': '100%',
    //         'opacity': '-=0.7'
    //     }, 4000, function () {
    //         $(this).remove()
    //     });
    // }, 350);

}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});






// fancyApp JS
Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,

    Toolbar: false,
    closeButton: "top",

    Image: {
        zoom: false,
    },

    on: {
        initCarousel: (fancybox) => {
            const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

            fancybox.$container.style.setProperty(
                "--bg-image",
                `url("${slide.$thumb.src}")`
            );
        },
        "Carousel.change": (fancybox, carousel, to, from) => {
            const slide = carousel.slides[to];

            fancybox.$container.style.setProperty(
                "--bg-image",
                `url("${slide.$thumb.src}")`
            );
        },
    },
});



// burger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})
//fixedNavbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
        navbar.classList.add('fixed-color');
    } else {
        navbar.classList.remove('fixed-nav');
    };
});


// slider 

$('.owl-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    autoplayTimeout: 2000,
    nav: false,
    responsiveClass: true,
    responsive: {
        // от 0 и больше
        0: {
            items: 1,
        },
        // от 600 и больше
        641: {
            items: 2,
        },
        // от 1000 и больше
        1000: {
            items: 3,
        }
    }
})