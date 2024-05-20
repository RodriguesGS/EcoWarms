export const toggleDrop = (btn) => {
    const dropDownMenu = btn.nextElementSibling;
    dropDownMenu.classList.toggle("hidden");
};