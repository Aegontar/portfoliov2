function changeCss() {
    const navBar = document.getElementById("nav-bar");
    const nav = document.getElementById("nav-2");
    const navHeight = document.getElementById("nav-2").style.height;
    const sideBarHeight = document.getElementById("side-bar").style.height;
    document.getElementById("nav-2").style.height = "0px";
    /* const navBar = document.getElementById("nav-bar"); */
    if (navHeight === "0px") {
        document.getElementById("nav-2").style.height = "200px";
        document.getElementById("side-bar").style.height = "600px"; 
    }  else if (navHeight === '200px') {
        document.getElementById("side-bar").style.height = "460px"; 
    }  
  } 



    
/* function myFunction2() {
    const navBar = document.getElementById("nav-bar");
    const sideBar = document.getElementById("side-bar");
    if(window.getComputedStyle(navBar).display === "flex") {
      window.getComputedStyle(sideBar).height === "100vh"
  } 
} */


function myFunction3() {
  const navBar = document.getElementById("nav-bar");
  const sideBar = document.getElementById("side-bar");
 if(window.getComputedStyle(navBar).display === "flex") {
  document.getElementById("side-bar").style.height = "100vh"; 
  } else if (window.getComputedStyle(navBar).display === "none") {
    document.getElementById("side-bar").style.height = "460px"; 
    document.getElementById("nav-2").style.height = "0px";
  }
}



/* 
lower level js
not recommend any books just code and watch mdn for referrence
frameworks are road blocks to be a js developer
*/