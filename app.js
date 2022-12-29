// selecting elements

const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// adding event to button

toggleBtn.addEventListener("click", function () {
  const hasClass = links.classList;
  if (hasClass.contains("show-links")) {
    hasClass.remove("show-links");
  } else {
    hasClass.add("show-links");
  }
});
