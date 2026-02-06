const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".section, .hero__card, .hero__copy").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
