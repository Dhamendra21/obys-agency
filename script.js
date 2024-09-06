

function loadingAnimation(){
    let tl = gsap.timeline()
    tl.from(".line h1",{
    y:100,
    duration:1,
    stagger:0.2,
    duration:0.6
})
tl.to(".line1-part1, .line h2",{
    opacity:0,
    delay:1,
    
})

tl.to(".loader",{
    opacity:0,
    duration:0.7,
    // delay:0.7
})
tl.from(".page1", {
    delay:0.2,
    y:1200,
    opacity:0,
    ease:"power4.inOut",
    // duration:0.5
});
tl.to(".loader", {
    display:"none"
});
// tl.from(".nav",{
//     delay:1,
//     opaicty:0,
//     duration:0.6
// })
tl.from("#hero1 h1,#hero2 h1, #hero3 h2, #hero4 h1 ",{
    y:150,
    stagger:0.3
})

tl.from("#hero1, .page2",{
    opacity:0
})

let h5timer = document.querySelector('.line1-part1 h5')

let count = 0
let countInterval = setInterval(()=>{
    ++count
    if(count === 100){
        clearInterval(countInterval)
    }
    h5timer.textContent = count
    
},20)



}

document.addEventListener("mousemove",(dts)=>{
    gsap.to(".crsr", {
        x:dts.clientX,
        y:dts.clientY,
        ease:"power1.out"
    });
})


function cursorAnimation(){
    Shery.makeMagnet(".nav-part2 h4" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
}

function smoothScrolling(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

smoothScrolling()

loadingAnimation()
cursorAnimation()
