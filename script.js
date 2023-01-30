const container = document.getElementById("container");
const sideMenu = document.getElementById("sideMenu");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const header = document.getElementById("header");



  container.addEventListener('click', function() {
     console.log("click")
      //window.alert("test")
      //sideMenu.classList.add("show")
      if(sideMenu.className === "hide") {
         sideMenu.classList.replace("hide","show");
         burgerToX()
         console.log("menu open");
       } // else {
     //    sideMenu.classList.remove("show");
     //    sideMenu.classList.add("hide")
     //  }
     else {
        // window.alert("Test")
         sideMenu.classList.replace("show", "hide");
         //burgerToNormal()
         console.log("menu closed");
         burgerToNormal()
     };
  });

  //make burger into an X
  function burgerToX() {
    bar1.classList.replace("bar","firstBar");
    bar2.classList.replace("bar","secondBar");
    bar3.classList.replace("bar","thirdBar");
  }

  function burgerToNormal() {
    bar1.classList.replace("firstBar", "bar");
    bar2.classList.replace("secondBar", "bar");
    bar3.classList.replace("thirdBar", "bar")
  }
 
  //clicking outside the menu closes the menu
  document.onclick = function(e) {
    if(e.target.id !== "sideMenu" && e.target.id !== "container" && sideMenu.classList=="show")
    {
       console.log("click outside");
       
    }
  }
 




//1

//  container.addEventListener('click', function() {
//     console.log("click")
//      //window.alert("test")
//      //sideMenu.classList.add("show")
//      if(sideMenu.style.marginLeft != "0" ) {
//         sideMenu.classList.add("show")
//       } // else {
//     //    sideMenu.classList.remove("show");
//     //    sideMenu.classList.add("hide")
//     //  }
//     else {
//         sideMenu.classList.replace("show","hide")
//     };
//  });


//2

// container.addEventListener('click', function() {
//     console.log("click")
//      //window.alert("test")
//      //sideMenu.classList.add("show")
//      if(sideMenu.className === "sideMenu") {
//         sideMenu.classList.add("show");
//       } // else {
//     //    sideMenu.classList.remove("show");
//     //    sideMenu.classList.add("hide")
//     //  }
//     else {
//        // window.alert("Test")
//         sideMenu.classList.add("hide")
//     };
//  });


//3
// container.addEventListener('click', function() {
//     console.log("click")
//      //window.alert("test")
//      //sideMenu.classList.add("show")
//      if(sideMenu.className === "hide" || sideMenu.className === "hide") {
//         sideMenu.classList.replace("hide","show");
//         //burgerToX()
//         console.log("menu open");
//         bar1.classList.add("firstBar")
//       } // else {
//     //    sideMenu.classList.remove("show");
//     //    sideMenu.classList.add("hide")
//     //  }
//     else {
//        // window.alert("Test")
//         sideMenu.classList.replace("show", "hide");
//         //burgerToNormal()
//         console.log("menu closed");
//         bar1.classList.replace("firstBar", "firstBarBack")
//     };
//  });

//  //make burger into an X
//  function burgerToX() {
//    bar1.classList.add("firstBar");
//    bar2.classList.add("secondBar");
//    bar3.classList.add("thirdBar");
//  }

//  function burgerToNormal() {
//    bar1.classList.replace("firstBar", "firstBarBack");
//    bar2.classList.replace("secondBar", "secondBarBack");
//    bar3.classList.replace("thirdBar", "thirdBarBack")
//  }
