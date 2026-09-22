
const handleMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileIcon = document.querySelector("#menu-icon");
    const mobileBtn = document.querySelector("#menu-btn");

    mobileMenu.classList.toggle("open");
    const isOpen = mobileMenu.classList.contains("open");
    if (isOpen) {
        mobileIcon.classList.remove("fa-bars");
        mobileIcon.classList.add("fa-xmark");
    } else {
        mobileIcon.classList.remove("fa-xmark");
        mobileIcon.classList.add("fa-bars");
    }
};

const intTranslateltr = -48 * 4;
const intTranslatertl = 36 * 4;

const setupIntersectionObserver = (ele, isltr, speed) => {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            document.addEventListener("scroll", scrollHandler);
        } else {
            document.removeEventListener("scroll", scrollHandler);
        }
    }
    const scrollHandler = () => {
        const translateX = (window.innerHeight - ele.getBoundingClientRect().top) * speed;
        let totalTranslate = 0;
        if (isltr) {
            totalTranslate = translateX + intTranslateltr;
        } else {
            totalTranslate = -(translateX + intTranslatertl);
        }
        ele.style.transform = `translateX(${totalTranslate}px)`;
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(ele);
}


const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");
const line4 = document.querySelector("#line4");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.75);

const dtEle = document.querySelectorAll('dt');
dtEle.forEach(ele => {
    ele.addEventListener("click", () => {
        const ddId = ele.getAttribute('aria-controls');
        const ddEle = document.getElementById(ddId);
        const ddArrowIcon = ele.querySelectorAll("i")[0];
        ddEle.classList.toggle("hidden");
        ddArrowIcon.classList.toggle("-rotate-180");
    })
})