gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
const filmImages = document.querySelectorAll('.film img');
const filmHolders = document.querySelectorAll('.film-wrapper');
const filmBacks = document.querySelectorAll('.film-back');




filmHolders.forEach(h=>{
    
 h.addEventListener('click',()=>{
    h.classList.toggle('active');
 })

})

// const smooth = ScrollSmoother.create({
//     wrapper:'#smooth-wrapper',
//     content:'#smooth-content',
//     smooth:2,
//     // pin:true,
//     effects:true,
    
// });

// smooth.effects('')
let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#hero',
        start: 'top top',
        end:'bottom bottom',
        pin:true,
        pinSpacing:false,
        markers:true,
        scrub: true,
        ease:'power1.out',
   

    }
})
tl.to('.hero-scroll-text',{
    left:'-160%',
    ease:'none',
})
tl.to('.red',{
    color:'red',
},'<')
tl.to('.b-one',{
    top:'10%',
    left:'35%',
    ease:'none',
},'<')

tl.to('.b-two',{
    top:'20%',
    left:'55%',
    ease:'none'
},'<')
tl.to('.one',{
    top:'38%',
    left:'+=20px',
    // zIndex:'1',
    scale:'.8',
    ease:'none'
},'<')
tl.to('.f-two',{
    top:'-=500px',
    left:'-=60px',
    ease:'none'
},'<')



let tl2 = gsap.timeline({
    scrollTrigger:{
        tigger:'#second',
        start:'15% top',
        end: '20% top',
        scrub:'true',
        // markers:true,
    }
})

tl2.from('#second .wrapper button',{
    y:250,
    // opacity:'0',
})
tl2.from('#second h2',{
    opacity:'0',
    y:250,
},'<')
tl2.to('#hero',{
    opacity:'0',
},'<')


filmImages.forEach(film=>{
    gsap.from(film,{
        objectPosition:'50% +=5%',
        opacity:'.8',
        // scale:'.95',
        scrollTrigger:{
            trigger:film,
            start:'-80% 20%',
            end: '-50% top',
            scrub:true,
            ease:'none',
            // markers:true
        }
    })
})
const services= document.querySelectorAll('.service');

services.forEach((s,i)=>{
    ScrollTrigger.create({
        trigger:s,
        start:'-15% top',
        scrub:true,
        pin:true,
        pinSpacing:false,
    })
})

ScrollTrigger.create({
    trigger:'#services',
    start:'top top',
    end:"+=" + 100 *(services.length -1) + "%"
})