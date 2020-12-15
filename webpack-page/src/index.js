import composition from "./composition"

// Add page composition to DOM
function index() {
    document.getElementById("app").innerHTML = composition();
} index();
