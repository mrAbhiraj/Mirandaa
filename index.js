const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: true
});

var t=gsap.timeline()


t.to("#page1",{
   y:'100vh',
   scale:0.6,
   duration:0
})

t.to("#page1",{
    y:"30vh",
    duration:1,
    delay:1
 })
 t.to("#page1",{
   y:'0vh',
   rotate:360,
   scale:1,
   duration:0.8
 })