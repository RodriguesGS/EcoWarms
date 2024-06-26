import { showLogin, showRegister } from "./changeLogin.js";
import { toggleDrop } from "/src/js/dropdown.js";
import { closeModal } from "./modal.js";
import { showWeather } from "./weather.js";
import { scrollCarrossel } from "./carrossel.js";

// Troca de tela do login

if (window.location.pathname.includes('login.html')) {
    document.querySelector("#link-register").addEventListener('click', showRegister);
    document.querySelector("#link-login").addEventListener('click', showLogin);
};

// Função dropDown

const dropDown = document.querySelectorAll("#dropDown");

dropDown.forEach((btn) => {
    btn.addEventListener("click", () => toggleDrop(btn));
});

document.addEventListener("click", (e) => {
    dropDown.forEach((btn) => {
        const dropDownMenu = btn.nextElementSibling;
        if (!btn.contains(e.target) && !dropDownMenu.contains(e.target)) {
            dropDownMenu.classList.add("hidden");
        };
    });
});

// Fechar modal

document.querySelector("#closeModal").addEventListener("click", closeModal);

// API Weather

const inputSearh = document.querySelector("#search");
const citySearch = document.querySelector("#searchAPI");

citySearch.addEventListener("click", async (e) => {
    const cityName = e.target.value;

    document.querySelector("#modal").classList.remove("hidden");

    document.body.classList.toggle("modal-open");
    
    inputSearh.value = "";

    showWeather(cityName);
});

inputSearh.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const cityName = e.target.value;

        document.querySelector("#modal").classList.remove("hidden");

        inputSearh.value = "";

        document.body.classList.toggle("modal-open");

        showWeather(cityName);
    };
});

// Carrossel

document.querySelector("#prev").addEventListener("click", () => {
    scrollCarrossel(-2000);
});

document.querySelector("#next").addEventListener("click", () => {
    scrollCarrossel(960);
});

// Menu Questions

const linksNav = document.querySelectorAll(".link-nav");

linksNav.forEach((link) => {
    link.addEventListener("click", () => {
        linksNav.forEach((item) => {
            item.classList.remove("ativo");
        });

        link.classList.add("ativo");

        const article = document.querySelectorAll("article");
        article.forEach((article) => {
            article.classList.add("hidden");
        })

        const articleId = link.id + "-article";
        const correspondingArticle = document.getElementById(articleId);
        correspondingArticle.classList.remove("hidden");
    });
});

function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

document.querySelector("#btnTop").addEventListener("click", topFunction)

