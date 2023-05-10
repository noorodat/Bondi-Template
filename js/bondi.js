/* 

No Code Here

*/


// Start Nav Active Links

let navLinks = document.querySelectorAll(".navbar .navbar-nav .nav-link");

navLinks.forEach(link => {

    link.onclick = function () {
    
        // Remove all the active classes
        navLinks.forEach(lk => {
            lk.classList.remove("active");
            link.classList.remove("rounded-pill");
        });

        link.classList.add("active");
        link.classList.add("rounded-pill");

    }

});




// End Nav Links





// Start Our Work Active Links

let allOurWorkLinks = document.querySelectorAll(".our-work .container ul li");

allOurWorkLinks.forEach(link => {

    link.onclick = function () {

        // Remove all the active classes

        allOurWorkLinks.forEach(lk => {
            lk.classList.remove("active");
            link.classList.remove("rounded-pill");
        });

        link.classList.add("active");
        link.classList.add("rounded-pill");

    }

});

// End Our Work active links