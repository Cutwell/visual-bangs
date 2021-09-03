// run on page load //
window.addEventListener('load', function () {
    init();
});

function init() {
    // contruct the additional buttons //
    var li_a_element = document.createElement("li");
    li_a_element.classList.add("vb__item");

    let a_element = document.createElement("a");
    a_element.classList.add("vb__link");
    a_element.id = "google_images";
    a_element.innerText = "Google Images";
    // create custom url to direct to google image results for query
    // &tbm=isch moves tab to images once page loads
    a_element.href = "https://www.google.com/search?q=" + encodeURIComponent(document.getElementById("search_form_input").value) + "&tbm=isch";

    var li_b_element = document.createElement("li");
    li_b_element.classList.add("vb__item");

    let b_element = document.createElement("a");
    b_element.classList.add("vb__link");
    b_element.id = "google_search";
    b_element.innerText = "Google Search";
    // create custom url to direct to google search results for query
    b_element.href = "https://www.google.com/search?q=" + encodeURIComponent(document.getElementById("search_form_input").value);

    // construct divider element
    let span_divider_element = document.createElement("span");  
    span_divider_element.classList.add("vb__sep");
    
    li_a_element.appendChild(a_element);
    li_b_element.appendChild(b_element);

    // append to duckbar
    document.getElementById("duckbar_static").appendChild(span_divider_element);
    document.getElementById("duckbar_static").appendChild(li_b_element);
    document.getElementById("duckbar_static").appendChild(li_a_element);

    // adjust duckbar css to fit new content
    document.getElementById("duckbar").style.maxWidth = "fit-content";
}