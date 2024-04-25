document.addEventListener("DOMContentLoaded", function () {
  addNavClickHandler("nav-icon-header");
  addNavClickHandler("nav-icon-menu");
  addBackDropClickHandler();
  // removeSimpleScrollOnMobile();
});

function addNavClickHandler(id) {
  document.getElementById(id).addEventListener("click", function () {
    document.getElementById("navbar").classList.toggle("open");
    document.getElementById("backdrop").classList.toggle("open");
  });
}

function addBackDropClickHandler() {
  document.getElementById("backdrop").addEventListener("click", function () {
    document.getElementById("navbar").classList.remove("open");
    document.getElementById("backdrop").classList.remove("open");
  });
}

function removeSimpleScrollOnMobile() {
  if(window.innerWidth >= 768) {
    const scrollContainer = document.getElementById("scroll-container")
    SimpleScrollbar.initEl(scrollContainer);
  }
}