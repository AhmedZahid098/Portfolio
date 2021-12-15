// document.querySelectorAll(".nav-link").forEach((nav_link) => {
//     nav_link.addEventListener("click", (event) => {
//         document.querySelectorAll(".main-section > header").forEach((item_des) => {
//             if (nav_link.innerText == item_des.innerText) {
//                  if (item_des.parentElement.classList.contains("w-0")) {
                    
//                     item_des.parentElement.classList.remove("w-0", "h-0")
//                     item_des.parentElement.classList.add("w-auto", "h-auto",)
//                  }
//                  else return
                
//             }
//             else {
//                 item_des.parentElement.classList.remove("w-auto", "h-auto",)
//                 item_des.parentElement.classList.add("w-0", "h-0")
//             }
//         })
//     })
// })


const myNav = document.getElementById('navbar');
window.onscroll = function () { 
    "use strict";
   if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        myNav.classList.add("bg-gray-200");
        myNav.classList.remove("bg-transparent", "hover:bg-gray-200");
    } 
    else {
        myNav.classList.add("bg-transparent", "hover:bg-gray-200");
        myNav.classList.remove("bg-gray-200");
    }
};



let mobile_navabr = document.querySelector("#mobile-nav")
let open_nav = document.querySelector(".open-sign")
let close_nav = document.querySelector(".close-sign")


document.addEventListener("click", (event) => {
    if (event.target.classList.contains("open-sign") || event.target.classList.contains("mobile-navbar")) {
        mobile_navabr.classList.remove("w-0");
        mobile_navabr.classList.add("w-auto");
        open_nav.classList.remove("w-auto");
        open_nav.classList.add("w-0");
        close_nav.classList.remove("w-0");
        close_nav.classList.add("w-auto");
    }else if(event.target.classList.contains("close-sign") || event.target.classList.contains("m-nav-element")) {
        mobile_navabr.classList.remove("w-auto");
        mobile_navabr.classList.add("w-0");
        open_nav.classList.remove("w-0");
        open_nav.classList.add("w-auto");
        close_nav.classList.remove("w-auto");
        close_nav.classList.add("w-0");
    }else if(!event.target.classList.contains("mobile-navbar") || !event.target.classList.contains("close-sign") || !event.target.classList.contains("m-nav-element-container")) {
        mobile_navabr.classList.remove("w-auto");
        mobile_navabr.classList.add("w-0");
        open_nav.classList.remove("w-0");
        open_nav.classList.add("w-auto");
        close_nav.classList.remove("w-auto");
        close_nav.classList.add("w-0");
    }
 
})


