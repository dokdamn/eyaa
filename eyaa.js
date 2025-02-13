document.addEventListener("DOMContentLoaded", function () {
    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("sakura");

        let size = Math.random() * 15 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = Math.random() * window.innerWidth + "px";
        petal.style.animationDuration = `${Math.random() * 6 + 4}s`;

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 10000);
    }

    setInterval(createPetal, 100);
});
