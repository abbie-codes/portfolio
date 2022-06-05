//Define Global Variables

//Define sections
const sections = document.getElementsByTagName("section");
const nav = document.getElementsByClassName("nav-link");

//Function to create array of HTML elements
function createArray(a){
    let aL = a.length;
    let values = [];
    for(i = 0; i < aL; i++ ){
        values.push(a[i]);
    }    
    return values
}

//Function to check if section is in viewport
function isSectionInViewport(section) {
    const rect = section.getBoundingClientRect();
    return (
        rect.top <= 485 && rect.bottom >= 50
    );
}

//Function to highlight the last clicked Navigation section
function toggleHighlight(c) {
    let cells = c.parentElement.parentElement.getElementsByClassName("nav-link");
    for (let i in cells) {
       let cell = cells.item(i);
       cell.style.cssText = (cell != c) ? "" : "background-color: #1674ea; color: #fff;";
    }
}

//Function to scroll to correct section on menu link click
function scrollToSection(){
    const navArray = createArray(nav);
    const sectionArray = createArray(sections);

    for (let i = 0; i < navArray.length; i++) {
            for (let j = 0; j < sectionArray.length; j++) {

                //Gets index of each array
                let navIndex = i; 
                let sectionIndex = j;

                //If index matches up then scroll to the section on click
                if(navIndex == sectionIndex) { 
                    navArray[i].addEventListener("click", function() { 
                        sectionArray[j].scrollIntoView({behavior: "smooth"});
                    }) 

                    //For each section in the viewport menu item highlights
                   document.addEventListener("scroll", function() {
                        if(isSectionInViewport(sectionArray[j]) === true) {
                            toggleHighlight(navArray[i]);
                        }
                    })
                }
            }
        }  
    }

//Call Function to active menu scrolling
scrollToSection(); 

$(document).ready(function () {
    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function () {
        $("#myCarousel").carousel(3);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function () {
        $("#myCarousel").carousel("next");
    });
});