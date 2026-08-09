const sections = document.querySelectorAll(".section, .mission, .closing");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach(section => {
  section.classList.add("reveal");
  observer.observe(section);
});
