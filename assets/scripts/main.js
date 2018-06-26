(function() {
  document.getElementById("toggle-nav").addEventListener("click", function() {
    console.log("hello!");
    var menuOverlay = document.getElementById("menu-overlay");
    menuOverlay.classList.add("visible");
  });

  document.getElementById("close-nav").addEventListener("click", function() {
    console.log("hello!");
    var menuOverlay = document.getElementById("menu-overlay");
    menuOverlay.classList.remove("visible");
  });
});
