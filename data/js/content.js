// contruct the additional button

var li_a_element = document.createElement("LI");
li_a_element.classList.add("zcm__item");
let a_element = document.createElement("A");
a_element.classList.add("zcm__link");
a_element.classList.add("js-zci-link");
a_element.id = "google_images";
let a_text = document.createTextNode("Google Images");
a_element.appendChild(a_text);
// create cutom url to direct to google image results for query
// &tbm=isch moves tab to images
a_element.href = "https://www.google.com/search?q=" + encodeURIComponent(document.getElementById("search_form_input").value) + "&tbm=isch";

var li_b_element = document.createElement("LI");
li_b_element.classList.add("zcm__item");
let b_element = document.createElement("A");
b_element.classList.add("zcm__link");
b_element.classList.add("js-zci-link");
b_element.id = "google_search";
let b_text = document.createTextNode("Google Search");
b_element.appendChild(b_text);
// create cutom url to direct to google search results for query
b_element.href = "https://www.google.com/search?q=" + encodeURIComponent(document.getElementById("search_form_input").value);


li_a_element.appendChild(a_element);
li_b_element.appendChild(b_element);

document.getElementById("duckbar_static").appendChild(li_b_element);
document.getElementById("duckbar_static").appendChild(li_a_element);
