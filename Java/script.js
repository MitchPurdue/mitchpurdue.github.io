window.onscroll = function() {
    stickyNav();
  };
  
  var header = document.getElementById("main-header");
  var sticky = header.offsetTop;
  
  function stickyNav() {
    if (window.pageYOffset > sticky) {
      header.classList.add("show"); /* Add class to show header */
    } else {
      header.classList.remove("show"); /* Remove class to hide header */
    }
  }
  