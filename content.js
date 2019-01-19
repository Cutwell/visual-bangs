// contruct the additional button

var li_element = document.createElement("LI");
let a_element = document.createElement("A");

li_element.classList.add("zcm__item");

a_element.classList.add("zcm__link");
a_element.classList.add("js-zci-link");

a_element.id = "google_images";

let a_text = document.createTextNode("Google Images");
a_element.appendChild(a_text);

// create cutom url to direct to google image results for query
// &tbm=isch moves tab to images
a_element.href = "https://www.google.com/search?q=" + encodeURIComponent(document.getElementById("search_form_input").value) + "&tbm=isch";

li_element.appendChild(a_element);

document.getElementById("duckbar_static").appendChild(li_element);
