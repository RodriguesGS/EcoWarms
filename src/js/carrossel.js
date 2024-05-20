const carrossel = document.querySelector(".carrossel");
let scrollPos = 0;

export const scrollCarrossel = (scrollOffset) => {
    scrollPos += scrollOffset;
    scrollPos = Math.max(0, Math.min(scrollPos, carrossel.scrollWidth - carrossel.offsetWidth));

    carrossel.scrollTo({
        left: scrollPos,
        behavior: "smooth",
    });
};