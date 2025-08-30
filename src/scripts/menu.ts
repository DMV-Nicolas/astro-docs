const $hamburguer = document.querySelector(".hamburger")

if ($hamburguer) {
  $hamburguer.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded")
  })
}
