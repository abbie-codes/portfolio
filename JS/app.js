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
        rect.top <= 290 && rect.bottom >= 50
    );
}

//Function to highlight the last clicked Navigation section
function toggleHighlight(c) {
    let cells = c.parentElement.parentElement.getElementsByClassName("nav-link");
    for (let i in cells) {
       let cell = cells.item(i);
       cell.style.cssText = (cell != c) ? "" : "color: #1674ea; border-bottom: 1px solid #1674ea;";
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