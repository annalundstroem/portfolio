function myFunction() {
    document.querySelector(".container").classList.toggle("change");
    //toggle betyder at når man klikker og animationen er på, så går animationen fra.. og hvis man klikker og animationen ikke er på, så sætter den igang.. //

}

document.querySelector(".container").addEventListener("click", myFunction);
