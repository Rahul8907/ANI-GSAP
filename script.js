var t1=gsap.timeline()
t1.from("#nav",{
  opacity:0,
  delay:0.1
})
t1.from("#nav h1,#nav h3,#nav h4",{
  y:-70,
  opacity:0,
  stagger:0.3
})
t1.from(" #conatiner #left h1",{
  x:-500,
  opacity:0,
  duration:0.3,
  stagger:0.3
})
t1.from("#right img",{
  scale:0.5,
  opacity:0,
  duration:0.1
})
gsap.from("#page2 .box",{
  scale:0,
  opacity:0,
  duration:0.3,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#page2 .box",
    scroller:"body",
  //  markers:true,
    start:"top 70%",
    end:"top 60%",
    scrub:3
  },
})
