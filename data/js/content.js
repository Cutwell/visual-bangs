// run on page load //
window.onload = function() {
    // insert custom css for button //
    // create an element
    const style = document.createElement('style');

    // add CSS styles
    style.innerHTML = `
        .vb__item {
            list-style: none;
            overflow: hidden;
            vertical-align: top;
            display: inline-block;
            margin: 0;
            padding: 0;
            border: 0;
            font: inherit;
            font-size: 100%;
            white-space: nowrap;
            text-transform: capitalize;
            color: #222;
            font-family: "DDG_ProximaNova","DDG_ProximaNova_UI_0","DDG_ProximaNova_UI_1","DDG_ProximaNova_UI_2","DDG_ProximaNova_UI_3","DDG_ProximaNova_UI_4","DDG_ProximaNova_UI_5","DDG_ProximaNova_UI_6","Proxima Nova","Helvetica Neue","Helvetica","Segoe UI","Nimbus Sans L","Liberation Sans","Open Sans",FreeSans,Arial,sans-serif;
        }

        .vb__link {
            text-decoration: none;
            color: #666;
            display: block;
            font-size: 1em;
            position: relative;
            margin: 0 7px;
            height: 37px;
            line-height: 37px;
            font-weight: 600;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            font-family: inherit;
            padding: 0;
            border: 0;
            font: inherit;
            vertical-align: baseline;
            list-style: none;
            white-space: nowrap;
            text-transform: capitalize;
            font-family: "DDG_ProximaNova","DDG_ProximaNova_UI_0","DDG_ProximaNova_UI_1","DDG_ProximaNova_UI_2","DDG_ProximaNova_UI_3","DDG_ProximaNova_UI_4","DDG_ProximaNova_UI_5","DDG_ProximaNova_UI_6","Proxima Nova","Helvetica Neue","Helvetica","Segoe UI","Nimbus Sans L","Liberation Sans","Open Sans",FreeSans,Arial,sans-serif;
        }

        .vb__link:hover {
            text-decoration: none;
            color: #333;
        }

        .vb__link:focus {
            outline: none;
        }

        .vb__link:active {
            text-decoration: none;
            color: #111;
        }

        .vb__sep {
            padding: 0;
            height: 37px;
            line-height: 37px;
            margin-left: -2px;
            margin-right: -1em;
            list-style: none;
            overflow: hidden;
            vertical-align: top;
            display: inline-block;
            margin: 0;
            border: 0;
            font: inherit;
            font-size: 100%;
            white-space: nowrap;
            text-transform: capitalize;
            color: #222;
            vertical-align: baseline;
            top: 0.1em;
            margin: 0 7px;
            height: 1em;
            content: "";
            border-left: 1px solid #d0d0d0;
            display: inline-block;
            position: relative;
            float: none;
            width: 0;
        }
    `;

    // append to DOM
    document.head.appendChild(style);

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