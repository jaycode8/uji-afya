// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
const wrapper = document.querySelector('.swiper-wrapper');
const menu = document.getElementById('menu');
const datepara = document.getElementById('date');

const settings = {
    loop: true,

    speed: 700,

    pagination: {
        el: ".swiper-pagination",
        type: "bullets"
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay:5000,
    }
};

const swiper = new Swiper(".mySwiper", settings);

const pagesData = [
    {
        "topic": "delicious",
        "text": "This wholesome porridge is a symphony of deliciousnes, blending the earthy richness of various natural products. With each spoonful, you'll savor the creamy texture that glides over the your bowl, leaving a lingering sweetness tha's both comforting and satisfying."
    },
    {
        "topic": "healthy",
        "text":"Made from natural ingredients, uji afya combines mouthwatering flavours and not only a treat for your senses but a powerhouse of a range of health benefits. Packed with essintial nutrients, it nourishes your body, providing a good source of energy and promoting overall well-being."
    },
    {
        "topic": "natural",
        "text": "This wholesome blend of flavours is a tastament to the beauty of nature. Uji afya is lovingly prepared using hand-picked, natural ingredients, ensuring that every spoonful is a journey into pure, unadulterated goodness."
    },
    {
        "topic": "organic",
        "text": "Embrace the organic goodness of uji afya, a porridge that celebrates the essence of nature's finest ingredients!"
    }
];

pagesData.map((infor, index) => {
    wrapper.innerHTML += `
        <div class="swiper-slide rounded-md sm:rounded-2xl overflow-hidden">
            <div class="${infor.topic} w-full h-full grid place-items-center cursor-pointer">
                <section class="w-90 md:w-1/2 grid place-items-center gap-6 text-whitish">
                    <h1 class="text-5xl sm:text-7xl capitalize">${infor.topic}</h1>
                    <p class="text-center text-xl">${infor.text}</p>
                    <a href="#about" class="bg-orange-500 p-1 px-8 rounded cursor-pointer text-black">Read More</a>
                </section>
            </div>
        </div>
    `
});

const toggleMenu = () => {
    if (menu.classList.contains('-right-64')) {
        menu.classList.remove('-right-64');
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
        menu.classList.add('-right-64');
    }
};

datepara.innerHTML = new Date().getFullYear()