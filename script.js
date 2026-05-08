for (let i = 0; i < 10; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    let size = Math.random() * 80 + 20;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.left = Math.random() * window.innerWidth + "px";
    bubble.style.bottom = "-200px";
    bubble.style.animationDuration = 8 + Math.random() * 6 + "s";
    document.body.appendChild(bubble);
}
