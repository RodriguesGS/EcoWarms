// Função dropDown

const dropDown = document.querySelectorAll("#dropDown");

dropDown.forEach((btn) => {
    btn.addEventListener("click", () => {
        const dropDownMenu = btn.nextElementSibling

        dropDownMenu.classList.toggle("hidden");
    })
})

// Fechar DropDown com clique em qualquer lugar da tela

document.addEventListener("click", (e) => {
    dropDown.forEach((btn) => {
        const dropDownMenu = btn.nextElementSibling

        if (!btn.contains(e.target) && !dropDownMenu.contains(e.target)) {
            dropDownMenu.classList.add('hidden');
        }
    })
})

// Modal

document.querySelector("#openModal").addEventListener("click", () => {
    document.querySelector("#modal").classList.remove("hidden")
})

document.querySelector("#closeModal").addEventListener("click", () => {
    document.querySelector("#modal").classList.add("hidden")
})