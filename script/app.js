const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

   //*validate variable exist
   if (toggle && nav) {
      toggle.addEventListener("click", () => {
         nav.classList.toggle("show-menu");
         console.log("test");
      });
   }
};

showMenu("toggle-open", "nav-menu");

const toggleOpen = document.querySelector("#toggle-open");
const nav = document.querySelector("#nav-menu");
const toggleClose = document.querySelector("#toggle-close");

toggleOpen.addEventListener("click", () => {
   nav.classList.add("show-menus");
   toggleOpen.style.display = "none";
   toggleClose.style.display = "block";

   toggleClose.addEventListener("click", () => {
      nav.classList.remove("show-menus");
      toggleOpen.style.display = "block";
      toggleClose.style.display = "none";
   });
});

const header = document.querySelector("#header");
const navLinks = document.querySelectorAll(".nav_link");

window.onscroll = () => {
   if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
      header.classList.add("navbars");
      navLinks.classList.add("nav_links");
   } else {
      header.classList.remove("navbars");
      navLinks.classList.add("nav_links");
   }
};
