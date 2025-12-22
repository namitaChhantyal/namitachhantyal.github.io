/* ================= NAVBAR LOAD ================= */
fetch("../../pages/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    const navbarEl = document.getElementById("navbar");
    if (navbarEl) navbarEl.innerHTML = data;

    // After navbar loads, initialize nav behaviors
    initNavbar();
    initNavToggler(); // works only after navbar exists
  })
  .catch((err) => console.error("Navbar load error:", err));


/* ================= NAVBAR FUNCTIONS ================= */
function initNavbar() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  const navLinks = nav.querySelectorAll("a");

  // Current file name (home.html, about.html, etc.)
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";

    // Mark active if href ends with the current page
    // Example: href="about.html" endsWith "about.html"
    if (href.endsWith(currentPage)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}


/* ================= TYPING ANIMATION ================= */
(function initTyped() {
  // Only run typing if .typing exists on the page
  if (!document.querySelector(".typing")) return;
  // Only run if Typed library is loaded
  if (typeof Typed === "undefined") return;

  new Typed(".typing", {
    strings: ["", "Namita Chhantyal", "QA Engineer | Data Analyst"],
    typeSpeed: 150,
    backSpeed: 100,   // ✅ correct property name (not BackSpeed)
    loop: true,
  });
})();


/* ================= NAV TOGGLER (SIDEBAR OPEN/CLOSE) ================= */
function initNavToggler() {
  const navTogglerBtn = document.querySelector(".nav-toggler");
  const aside = document.querySelector(".aside");

  if (!navTogglerBtn || !aside) return;

  navTogglerBtn.addEventListener("click", () => {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
  });
}
