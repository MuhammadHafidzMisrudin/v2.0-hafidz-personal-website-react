/* 
    Author: Muhammad Hafidz Misrudin
    Description: Proprietary (no permission for copy or use or redistribution)
    Date written: 31/08/2020
    Date last updated: 05/09/2020
*/

$(() => {
    // test jquery section.
    console.log("page ready!");
    // function notify() {
    //     alert("my dev project button clicked!");
    // }
    // $(".section-1-btn").on("click", notify);

    // set a variable to get the navbar element.
    const navbar = document.querySelector(".navbar");

    // set a variable to get all section elements.
    const allsections = document.querySelectorAll("section");
    // console.log("allsections -> ", allsections);

    // set a variable to get all navbar links class.
    const navbarLinks = document.querySelectorAll(".navbar-link");
    // console.log("navbarLinks -> ", navbarLinks);

    // set a variable to get the initial position for navbar.
    const navbarOffSetTop = navbar.offsetTop;

    // set a variable to get progress bar wrapper class.
    const progress = document.querySelector(".progress-bars-wrapper");

    // create an array to store percentage values of progress bars.
    const progressBarPercents = [98, 60, 50, 60, 50, 70, 80, 50];

    // attaching the event listener function to window's scrolling event.
    window.addEventListener("scroll", () => {
        // invoke helper function on scrolling event.
        mainScrollingEventFn();
    });

    // helper function for scrolling event.
    const mainScrollingEventFn = () => {
        // property (pageYOffset) -> returns the distance in pixels that has beem scrolled up vertically.
        // property (offsetTop) -> returns the distance from the top edge of the page to the navbar element.
        const testOffSetTop = navbar.offsetTop;
        const yOffset = window.pageYOffset;

        // compare the page-y-offset to the initial position of navbar.
        if (window.pageYOffset >= navbarOffSetTop) {
            console.log("it has reached sticky section!");
            navbar.classList.add("sticky-navbar");
        } else {
            console.log("no sticky section");
            navbar.classList.remove("sticky-navbar");
        }

        // loop through each section.
        allsections.forEach((section, index) => {
            // check if it is scrolled down and reaches to the proper section.
            if (window.pageYOffset >= section.offsetTop - 10) {

                // loop through and remove highlight from each navbar link.
                navbarLinks.forEach(navbarLink => {
                    navbarLink.classList.remove("change");
                });

                // it highlights the particular navbar link of the section.
                navbarLinks[index].classList.add("change");
            }
        });

        // compare the page-y-offset to the initial position of progress bar wrapper class.
        // the sume of pageYOffset + innerHeight returns the height of the window
        // for the height of the content that is visible on the page.
        if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
            // select all progress percent class and loop through all
            document.querySelectorAll(".progress-percent").forEach((element, index) => {
                // change style for width property to the values in array accordingly.
                element.style.width = `${progressBarPercents[index]}%`;

                // use percentage values from array dynamically and 
                // display them in markup for span elements within progress bar class dynamically.
                element.previousElementSibling.firstElementChild.textContent = progressBarPercents[index];
            });
        }
    }

    // invoke to run helper function once by default when page is ready.
    mainScrollingEventFn();

    // attaching the event listener function to window's resize event.
    window.addEventListener("resize", () => { 
        // reload page when window is resized. 
        window.location.reload();
    });
});