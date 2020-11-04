

//run the navabr function

//The amount od section to be observed to view the action needed

/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
const nav = document.getElementById('navbar__list'); //


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

//Navbar funcction
const navbar = function(){
 // identify the name , the section link varibles


    sections.forEach(function(section){

// store each link using innerHTML to update the nav elemnt and using Template to write them


        nav.innerHTML += `<li> <a class="menu__link" href="#${section.id} "> ${section.dataset.nav} </a> </li>`;
    });
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

navbar();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

const options = {
  threshold: 0.7 // The prcentge of the section is being viewd in page
}

const observer = new IntersectionObserver(function
  (enrtie, observer){
  enrtie.forEach(function(entre) {
    // const navsection = document.querySelector(`.menu_section[data-sections='${entre.target.id}']`);


    sectionN = entre.target.id.replace(/\D/g, "");
      let x = document.querySelector(`#navbar__list > li:nth-child(${sectionN}) > a`);
    //to see if the section isIntersecting so they dont show up all it the begining of viewing the page
    if(entre.isIntersecting){
      //Add the your-active-class class to the Observed section :
      entre.target.classList.add('your-active-class');
      x.classList.add('ActiveNav');
    }else{
      //remove the active class when isIntersecting become false :

        entre.target.classList.remove('your-active-class');
          x.classList.remove('ActiveNav');
    }

  });
}, options);
//for each section the observer will observe every indivsual section
 sections.forEach(function(section) {
   observer.observe(section);
 });

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click
//
function smothScroll() {
    nav.addEventListener('click',function (Event) {
        Event.preventDefault();
        document.querySelector(Event.path[0].hash).scrollIntoView({behavior: "smooth"});
    });
  }
smothScroll();
// window.addEventListener('scroll', function() {
// 	let ele = document.querySelector('#section4');
