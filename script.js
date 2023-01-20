gsap.to('#videoplyr',{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:2,
        pin:"#main"
    },
    

width: "100%",


}),

gsap.to('#one',{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:3,
    opacity:0
        
    },
    

left:"-600%",

}),
gsap.to('#holdr1',{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:3,
    opacity:0
        
    },
    

left:"-300%",


})
gsap.to('#sx',{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:3,
    opacity:0
        
    },
    

right:"-600%",


})




gsap.to('#holdr2',{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:3,
    opacity:0
        
    },
    

right:"-300%",


})

gsap.to('h2',{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:4,
    
        
    },
    

top:"-600%",


})



gsap.to('h1',{
    scrollTrigger:{
        trigger:".cover",
        start:"top 30%",
        scrub:3,
    backgroundColor: ""
        
    },
    

top:"-100%",


})








var circal = document.querySelector("#circal")

window.addEventListener('mousemove',function(dets){
          var xValue = dets.pageX;
          var yValue = dets.pageY;

        setTimeout(function(){
            circal.style.top = yValue +'px';
            circal.style.left = xValue +'px';

        },100)
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
delay:2500
},
    // centeredSlides: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });