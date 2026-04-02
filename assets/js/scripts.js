window.addEventListener("scroll", function () {
  let header = document.querySelector(".menu");

  header.classList.toggle("rowEffect", window.scrollY > 10);
});
