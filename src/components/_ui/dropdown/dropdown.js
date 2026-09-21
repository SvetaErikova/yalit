if (window.matchMedia("(max-width: 768px)").matches) {
  let dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    if (dropdown.classList.contains("btn-contacts")) {
      dropdown.addEventListener("click", (e) => {
        e.preventDefault();
        PopupManager.open('popup_for_contacts');
      });
    } else {
      dropdown.addEventListener("click", (e) => {
        // e.preventDefault();
        dropdown.classList.toggle("is_active");
      });
    }
  });
}
