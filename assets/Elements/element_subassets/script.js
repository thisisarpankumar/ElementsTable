/*function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsById("element-id").classList.add("element-id-onScroll");
    document.getElementsByClassName("element-id-onScroll").classList.remove("element-id");
  } else {
    document.getElementsByClassName("element-id-onScroll").classList.add("element-id");
    document.getElementsByClassName("element-id").classList.remove("element-id-scroll");
    
  }
}*/

var loader = document.getElementById("preloader");
			window.addEventListener("load", function(){
				loader.style.display = "none";
			})

