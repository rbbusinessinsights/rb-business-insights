document.addEventListener(
  "click",
  function (event) {
    const toggle = event.target.closest(".nav-toggle");
    const dropButton = event.target.closest(".nav-dropbtn");
    const navigation = event.target.closest(".navbar");

    if (toggle) {
      event.preventDefault();
      event.stopPropagation();

      const links = toggle.parentElement.querySelector(".nav-links");
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      return;
    }

    if (dropButton) {
      event.preventDefault();
      event.stopPropagation();

      const dropdown = dropButton.closest(".nav-dropdown");
      const isOpen = !dropdown.classList.contains("open");

      dropdown.parentElement.querySelectorAll(".nav-dropdown.open").forEach(function (openDropdown) {
        openDropdown.classList.remove("open");
        openDropdown.querySelector(".nav-dropbtn").setAttribute("aria-expanded", "false");
      });

      dropdown.classList.toggle("open", isOpen);
      dropButton.setAttribute("aria-expanded", String(isOpen));
      return;
    }

    if (!navigation) {
      document.querySelectorAll(".nav-dropdown.open").forEach(function (dropdown) {
        dropdown.classList.remove("open");
        dropdown.querySelector(".nav-dropbtn").setAttribute("aria-expanded", "false");
      });
    }
  },
  true
);

document.addEventListener("keydown", function (event) {
  if (event.key !== "Escape") return;

  document.querySelectorAll(".nav-dropdown.open").forEach(function (dropdown) {
    dropdown.classList.remove("open");
    dropdown.querySelector(".nav-dropbtn").setAttribute("aria-expanded", "false");
  });
});
