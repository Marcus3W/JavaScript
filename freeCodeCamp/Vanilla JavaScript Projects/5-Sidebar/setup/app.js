const togglebtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

togglebtn.addEventListener('click', function () {
    /* LONG METHOD - with add / remove
    if(sidebar.classList.contains("show-sidebar")) { // checks class exists, returns true or false
        sidebar.classList.remove('show-sidebar');
    }
    else {
        sidebar.classList.add('show-sidebar');
    }
    */

    // SHORT METHOD - with toggle
    sidebar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
})