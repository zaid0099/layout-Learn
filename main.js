var pagetop, menu, yPos;
function yScroll() {
  pagetop = document.getElementById("pageTop");
  yPos = window.pageYOffset;
  if (yPos > 150) {
    pagetop.style.height = "36px";
    pagetop.style.paddingTop = "8px";
  } else {
    pagetop.style.height = "120px";
    pagetop.style.paddingTop = "50px";
  }
}
// test = () => console.log("test");
window.addEventListener("scroll", yScroll);
