const closeBtn = document.querySelector("#closeBtn");
const menu = document.querySelector("#menu");

closeBtn.addEventListener("click", toggle);

function toggle() {
  menu.classList.toggle("menu--active");
   
}
