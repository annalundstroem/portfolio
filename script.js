function myFunction() {
    document.querySelector(".burgermenu").classList.toggle("change");
    document.querySelector(".menu").classList.toggle("hide");
    //toggle betyder at når man klikker og animationen er på, så går animationen fra.. og hvis man klikker og animationen ikke er på, så sætter den igang.. //

}

document.querySelector(".burgermenu").addEventListener("click", myFunction);
