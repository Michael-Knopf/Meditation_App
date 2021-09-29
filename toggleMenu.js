const openMenuBtn = document.querySelector(".toggle-menu"),
    seasonsMenu = document.querySelector(".seasons");

openMenuBtn.addEventListener('click', () => {
    seasonsMenu.classList.toggle("active");
    openMenuBtn.classList.toggle("rotate");
    console.log("got it")
})