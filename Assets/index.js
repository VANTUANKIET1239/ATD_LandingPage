
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