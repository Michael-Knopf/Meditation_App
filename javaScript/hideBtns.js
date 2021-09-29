const app = document.querySelector(".app")
const inactiveTime = 60000;

let mouseLastMoved = new Date();

document.addEventListener('mousemove', () => {
    mouseLastMoved = new Date();
    app.classList.remove("inactive")
    document.body.style.cursor = "auto"
})

function deactivateApp() {
    let now = new Date();
    let deltaTime = now - mouseLastMoved;

    if (deltaTime >= inactiveTime) {
        app.classList.add("inactive")
        document.body.style.cursor = "none"
    }

    requestAnimationFrame(deactivateApp)
}

deactivateApp()