$(document).ready(function() {
    var $ = function (id) {
        return document.getElementById(id);
    };
    var navLinks = $("navLinks");
    $("open_button").onclick = ()=>{
        navLinks.style.right = "0";
    };
	$("close_button").onclick = ()=>{
        navLinks.style.right = "-200px";
    }
});