function openNav()
{
	document.getElementById("myNav").style.height="100%";
}
function closeNav()
{
	document.getElementById("myNav").style.height="0%";
}
var loader = document.getElementById("preloader");
			window.addEventListener("load", function(){
				loader.style.display = "none";
			})