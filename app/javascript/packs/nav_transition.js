// Setup / Functions

/*
*   Add a listener to the specified section button to change sections on page.
*
*   @param section_name [string] - name of the section
*/
function add_section_listener(section_name) {
  document.getElementById(section_name+"_button").addEventListener("click", function() {
    reset_all_sections();
    this.parentElement.style.background = "rgb(183, 204, 223)";
    this.classList.add("active");
  
    document.getElementById(section_name+"_content_body").hidden=false;
  });
}

/*
*   Reset a section on the page, meaning clearing the active button and content.
*
*   @param section_name [string] - name of the section
*/
function reset_section(section_name) {
  document.getElementById(section_name+"_button").classList.remove("active");
  document.getElementById(section_name+"_button").parentElement.style.background = "#e9ecef";
  document.getElementById(section_name+"_content_body").hidden=true;
}

/*
*   Reset all sections on the page.
*/
function reset_all_sections() {
  reset_section("about");
  reset_section("resume");
  reset_section("projects");
}

// Main
console.log("nav_transition loaded");

add_section_listener("about");
add_section_listener("resume");
add_section_listener("projects");
