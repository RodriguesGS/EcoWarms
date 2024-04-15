const dropDown = document.querySelectorAll("#dropDown");

dropDown.forEach((btn) => {
    btn.addEventListener("click", () => {
        const dropDownMenu = btn.nextElementSibling

        dropDownMenu.classList.toggle("hidden");
    })
})

document.addEventListener("click", (e) => {
    dropDown.forEach((btn) => {
        const dropDownMenu = btn.nextElementSibling

        if (!btn.contains(e.target) && !dropDownMenu.contains(e.target)) {
            dropDownMenu.classList.add('hidden');
        }
    })
})