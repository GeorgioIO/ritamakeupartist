const actionButtons = document.querySelectorAll(".actionButton");
const burgerMenu = document.querySelector(".burger-menu");
const CloseSidebarButton = document.querySelector(".close-sidebar");
const upButton = document.querySelector(".upbutton");
const appCheckBox = document.getElementById("appointment");
const locationSwitchers = document.querySelectorAll(".locationSwitcher");

// TITLE : EVENT LISTENERS
burgerMenu.addEventListener("click", toggleSidebar);

// -SUB EVENT LISTENER- HANDLE UP BUTTON
upButton.addEventListener("click" , () => {
    window.scroll({
        top : 0,
        behavior : 'smooth'
    });
})

// -SUB EVENT LISTENER- HANDLE LOCATION SWITCHER
locationSwitchers.forEach(switcher => {
    switcher.addEventListener("click" , (event) => {
        let location = event.target.id;
        if(location === "ehdenLocation")
        {
            console.log(1);
            document.querySelector("#ehdenLocation").classList.toggle("active-location");
            document.querySelector("#mejdlayaLocation").classList.toggle("active-location");
            document.querySelector("#ehdenFrame").style.display = "block";
            document.querySelector("#mejdlayaFrame").style.display = "none";
        }
        else if(location === "mejdlayaLocation")
        {
            console.log(2)
            document.querySelector("#mejdlayaLocation").classList.toggle("active-location");
            document.querySelector("#ehdenLocation").classList.toggle("active-location");
            document.querySelector("#mejdlayaFrame").style.display = "block";
            document.querySelector("#ehdenFrame").style.display = "none";
        }
    })
})

// -SUB EVENT LISTENER- HANDLE WHEN APPOINTMENT CHECK IS CHECKED
appCheckBox.addEventListener("change" , (event) => {
    const textArea = document.getElementById("note");
    if(event.target.checked)
    {
        textArea.value = "";
        textArea.value = "Add the time you want / notes..."
    }
    else
    {
        textArea.value = "";
    }
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

// -SUB FUNCTIONS- FUNCTION FOR DELAYING LINK OPEN
function delayedLink(linkLocation)
{
    actionButtons.forEach(button => {
        button.addEventListener("click" , () =>
        {
            button.classList.add("filled");
        
            setTimeout(function(){
                window.location.href = linkLocation;
            },100);
        })   
    })
}

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



