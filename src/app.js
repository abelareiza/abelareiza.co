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

function switchTheme() {
  let theme = document.getElementById("DOM");
  let toggler = document.getElementById("themeToggler");

  theme.classList.toggle("dark");
  toggler.classList.toggle("left-[25px]");
}
