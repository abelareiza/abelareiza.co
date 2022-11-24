const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("custom-show");
    }
    // else { entry.target.classList.remove("custom-show"); }
  });
});

const hiddenElements = document.querySelectorAll(".custom-hidden");
hiddenElements.forEach((e) => observer.observe(e));
