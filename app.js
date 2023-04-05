const newSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}
newSlide();

function LinkClick(){
  const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

  nav.classList.toggle('nav-active');
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
        link.style.animation = "";
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.5}s`;
    }
});
  burger.classList.toggle('toggle');
}
var progressbar = document.getElementById('progress');
var percent = document.getElementById('percent');

var totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    var progress = (window.pageYOffset / totalHeight) * 100;
    progressbar.style.height = progress + "%";
    percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%"
}



particlesJS.load('particles-js', 'particle.json', function() {
    console.log('callback - particles-js config loaded');
  });

var magic = document.querySelector(".magic");

document.addEventListener('mousemove', function(e){
    // magic.style.top = e.clientY - 30 + "px";
    // magic.style.left = e.clientX - 30 + "px";


    
    magic.style.transform = "translate("+ (e.clientX - 30) + "px," + (e.clientY - 30) +"px)";


    // console.log("Client " + e.clientX,e.clientY);
    // console.log("Page " + e.pageX,e.pageY);
    // console.log("Offset " + e.offsetX,e.offsetY);
    // console.log("------------------------------------")
})

// gsap.to(".box", {
//     scrollTrigger: {
//     trigger: "#services", // start the animation when ".box" enters the viewport (once)
//     start: "top center",
//     scrub:1
// },
//     x: 500,
//     opacity: 0.1
// });


gsap.to(".anim-box",{
    scrollTrigger: {
            trigger: ".content", // start the animation when ".box" enters the viewport (once)
            start: "bottom 55%",
            scrub:1
        },
           width: "80%",
           height: "80%"
})

gsap.to(".anim-box",{
    scrollTrigger: {
            trigger: ".gsap-anim", // start the animation when ".box" enters the viewport (once)
            start: "bottom bottom",
            scrub:1
        },
        scale: "0"
})

gsap.to(".content .text-para",{
    scrollTrigger: {
            trigger: ".gsap-anim", // start the animation when ".box" enters the viewport (once)
            start: "top 260%",
            scrub:1
        },
        x: 200
})

let mm = new MagnetMouse({
    magnet: {
        element: '.magnet-mouse', /* Element to magnet */
        class: 'magnet-mouse-active', /* Adds a class when the magnet effect begins */
        enabled: true, /* Enables the magnet effect */
        distance: 20, /* Distance (in px) when the magnet effect around element activates */
        position: 'center' /* Position of mouse relative to the element when magnet effect is active */
      }
    //   ,follow: {
    //     element: '.follow-mouse', /* Element that follows the mouse */
    //     class: 'follow-mouse-active' /* Add class to element that follows the mouse when enter in the magnet effect */
    //   },
    //   throttle: 10, /* Time (in ms) between each eventListener calls */
    //   inCallback: null, /* Callback when mouse enters in the magnet effect */
    //   outCallback: null /* Callback when mouse leaves in the magnet effect */
  });
  
  mm.init();



//   var magic = document.querySelector(".mouse-follow");
//  document.querySelector(".anim-box").addEventListener('mousemove', function(e){
//     magic.style.top = e.clientY + "px";
//     magic.style.left = e.clientX + "px";

//     // magic.style.transform = "translate("+ (e.clientX - 30) + "px," + (e.clientY - 30) +"px)";


//     // console.log("Client " + e.clientX,e.clientY);
//     // console.log("Page " + e.pageX,e.pageY);
//     // console.log("Offset " + e.offsetX,e.offsetY);
//     // console.log("------------------------------------")
// })