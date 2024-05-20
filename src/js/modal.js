export const closeModal = () => {
    document.querySelector("#modal").classList.add("hidden");
    document.body.classList.toggle("modal-open");
};