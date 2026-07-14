document.addEventListener("click", function (e) {

    const icons = ["✦","✧","⭐","✨"];

    for (let i = 0; i < 6; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.textContent = icons[Math.floor(Math.random() * icons.length)];

        const angle = Math.random() * Math.PI * 2;

        const distance = 25 + Math.random() * 50;

        star.style.left = e.clientX + "px";
        star.style.top = e.clientY + "px";

        star.style.setProperty("--x", Math.cos(angle) * distance + "px");
        star.style.setProperty("--y", Math.sin(angle) * distance + "px");

        document.body.appendChild(star);

        setTimeout(() => {

            star.remove();

        }, 800);

    }

});
