export const showLogin = () => {
    document.querySelector(".login").classList.remove("hidden");
    document.querySelector(".login").classList.add("flex");
    document.querySelector(".register").classList.add("hidden");
    document.querySelector(".register").classList.remove("flex");

    document.querySelector(".login").style.opacity = "1";
    document.querySelector(".register").style.opacity = "0";
};

export const showRegister = () => {
    document.querySelector(".login").classList.remove("flex");
    document.querySelector(".login").classList.add("hidden");
    document.querySelector(".register").classList.add("flex");
    document.querySelector(".register").classList.remove("hidden");

    document.querySelector(".login").style.opacity = "0";
    document.querySelector(".register").style.opacity = "1";
};