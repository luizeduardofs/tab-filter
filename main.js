var btnFilter = document.querySelectorAll(".btn-filter");
var options = document.querySelectorAll("#badge");

btnFilter.forEach((button) => {
  button.addEventListener("click", () => {
    options.forEach((badge) => {
      if (button.id === "all") {
        badge.style.display = "flex";
      } else if (badge.classList.contains(button.id)) {
        badge.style.display = "flex";
      } else {
        badge.style.display = "none";
      }
    });
  });
});
