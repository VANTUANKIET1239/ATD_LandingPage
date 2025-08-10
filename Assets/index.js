
console.log('ewfwef');
const observer = new IntersectionObserver((entries) => {
    console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.slide-left, .slide-right').forEach(el => observer.observe(el));


    const container = document.getElementById("binaryContainer");
    const paths = [
        document.getElementById("wavePath1"),
        document.getElementById("wavePath2")
    ];

    paths.forEach((path, idx) => {
        const length = path.getTotalLength();
        for (let i = 0; i < 140; i++) {
            const distance = (i / 140) * length;
            const point = path.getPointAtLength(distance);

            // Create a "column" of binary numbers along the wave
            const count = Math.floor(Math.random() * 4) + 2; // 2-5 numbers per column
            for (let j = 0; j < count; j++) {
                const span = document.createElement("span");
                span.textContent = Math.random() > 0.5 ? "0" : "1";
                span.style.left = `${point.x}px`;
                span.style.top = `${point.y + (j - count / 2) * 14}px`;
                span.style.fontSize = `${10 + Math.random() * 10}px`;
                span.style.color = `rgba(0, 70, 173, ${0.3 + Math.random() * 0.7})`;
                span.style.animationDelay = `${Math.random() * 2}s`;
                container.appendChild(span);
            }
        }
    });


[...container.querySelectorAll("span")].forEach((span, idx) => {
    span.style.animationDelay = `${1 + idx * 0.01}s`; // staggered by 0.01s
});

[...container.querySelectorAll("span")].forEach((span, idx) => {
    let delay = 1 + idx * 0.01; // start after 1s
    span.style.setProperty("--delay", `${delay}s`);
});