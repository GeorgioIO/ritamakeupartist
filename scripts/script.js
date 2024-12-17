const actionButtons = document.querySelectorAll(".actionButton");
const burgerMenu = document.querySelector(".burger-menu");
const CloseSidebarButton = document.querySelector(".close-sidebar");


// TITLE : EVENT LISTENERS
burgerMenu.addEventListener("click", toggleSidebar);

// -SUB EVENT LISTENER- HANDLE BOOK NOW BUTTON
actionButtons.forEach(button => {
    button.addEventListener("click" , () =>
    {
        button.classList.add("filled");
    
        setTimeout(function(){
            window.location.href = "https://google.com";
        },500);
    })   
})


// -SUB EVENT LISTENERS- HANDLER TO CLOSE THE SIDEBAR
CloseSidebarButton.addEventListener("click" , (event) => {
    const sideBar = document.querySelector("#sidebar");
    if (!sideBar) {
        console.error("Sidebar element not found!");
    }
    
    let sideBarDisplay = window.getComputedStyle(sideBar).display;

    if(sideBarDisplay === "flex")
    {
        burgerMenu.addEventListener("click", toggleSidebar);
        sideBar.style.animationName = "slideOut";

        setTimeout(() => {
            sideBar.style.display = "none";
          }, 1100);
    }
});

// TITLE : FUNCTIONS

// -SUB FUNCTIONS- FUNCTION FOR THE BURGER MENU
function toggleSidebar ()
{
    const sideBar = document.querySelector("#sidebar");
    let sideBarDisplay = window.getComputedStyle(sideBar).display;

    if(sideBarDisplay === "flex")
    {
        sideBar.style.animationName = "slideOut";
        // sideBar.style.display = "none";
        setTimeout(() => {
            sideBar.style.display = "none";
          }, 1100);
    }
    else if(sideBarDisplay === "none")
    {
        burgerMenu.removeEventListener("click", toggleSidebar);
        sideBar.style.display = "flex"
        sideBar.style.animationName = "slideIn";


        
        
    }
}