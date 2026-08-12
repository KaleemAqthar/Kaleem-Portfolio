const initScrollAnimation = () => {
  const elements = document.querySelectorAll(
    "#about > div, #skills > div, #projects > div, #contact > div"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => {
    element.classList.add("scroll-hidden");
    observer.observe(element);
  });
};

window.addEventListener("load", initScrollAnimation);