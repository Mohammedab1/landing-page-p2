# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.


This is a second project in Udacity Nano degree program for fron-end .
This project is to build a landing page website . The requirement are to make the page responsive, to view 4 sections at least , also to view what section is being observed , and to build a nav-bar that leads to each section .

1.For the informing about what section is being viewed i chose IntersectionObserver insted of an eventListener for scroll because scrool keeps chicking for a an event while IntersectionObserver will only work if the section is observed and also if its not observed .

2.For the navbar i used a foreach loop for every section i store its its id to link it in the href and i store the dataset to give it the name .
