// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    //console.log(links.classList);
    //console.log(links.classList.contains("random")); // returns false as class doesnt exist
    //console.log(links.classList.contains("links")); // returns true as class doesnt exist

    /*LONG METHOD - with add / remove
    if(links.classList.contains("show-links")) {
        links.classList.remove("show-links");
    }
    else {
        links.classList.add("show-links");
    }
    */

    // SHORT METHOD - with toggle
    links.classList.toggle("show-links");
});


