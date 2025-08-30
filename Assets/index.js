
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



[...container.querySelectorAll("span")].forEach((span, idx) => {
    span.style.animationDelay = `${1 + idx * 0.01}s`; // staggered by 0.01s
});

[...container.querySelectorAll("span")].forEach((span, idx) => {
    let delay = 1 + idx * 0.01; // start after 1s
    span.style.setProperty("--delay", `${delay}s`);
});



 (function(){
    const els = document.querySelectorAll('#ai-course-cta .reveal, #ai-course-cta .ai-card, #ai-course-cta .ai-visual, #ai-course-cta .ai-copy');
    const show = el => el.classList.add('show');
    if(!('IntersectionObserver' in window)){ els.forEach(show); return; }
    const io = new IntersectionObserver((entries, obs)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ show(e.target); obs.unobserve(e.target); }});
    }, {threshold:.12});
    els.forEach(el=>{ el.classList.add('reveal'); io.observe(el); });
  })();

  // Toggle mini syllabus
  (function(){
    const btn = document.getElementById('syllabusBtn');
    const card = document.getElementById('syllabusCard');
    if(btn && card){
      btn.addEventListener('click', ()=>{
        const isHidden = card.hasAttribute('hidden');
        if(isHidden) card.removeAttribute('hidden'); else card.setAttribute('hidden','');
        btn.textContent = isHidden ? 'Ẩn đề cương' : 'Xem đề cương nhanh';
      });
    }
  })();

  // Gắn UTM tracking nhẹ cho CTA (tùy chọn)
  (function(){
    const link = document.getElementById('aiCourseLink');
    if(!link) return;
    try{
      const u = new URL(link.href);
      if(!u.searchParams.get('utm_source')){
        u.searchParams.set('utm_source','landing');
        u.searchParams.set('utm_medium','cta');
        u.searchParams.set('utm_campaign','ai-working-pro');
        link.href = u.toString();
      }
    }catch(e){}
  })();