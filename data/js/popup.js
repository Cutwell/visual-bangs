// test to see if extension loaded buttons successfully.  

if (document.getElementById("google_images") != null) {
    document.getElementById("status-indicator").src = "data/img/success.png";
}
else {
    document.getElementById("status-indicator").src = "data/img/failure.png";
}
