gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
const filmImages = document.querySelectorAll('.film img');
// const smooth = ScrollSmoother.create({
//     wrapper:'#smooth-wrapper',
//     content:'.smooth-content',
//     smooth:.5,
//     effects:true,
// });
// gsap.timeline.to('.hero-scroll-text',{
//     left:'-140%',
    
//     // ease:'none',
//     scrollTrigger:{
//         trigger:'#hero',
//         pin:'.hero-scroll-text',
//         pinSpacing:false,
//         markers:true,
//         absolute:true,
//         start:'5% top',
//         end: 'bottom bottom',
//         scrub:true
        
//     }
// })
let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#hero',
        start: 'top top',
        end:'100% bottom',
        pin:true,
        pinSpacing:false,
        // markers:true,
        scrub: true,
        ease:'power1.out'


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
        markers:true,
    }
})
tl2.to('#hero',{
    opacity:'0',
})

tl2.from('#second h2',{
    opacity:'0',
    y:100,
},'<')


filmImages.forEach(film=>{
    gsap.from(film,{
        objectPosition:'50% 20%',
        opacity:'.8',
        scale:'.95',
        scrollTrigger:{
            trigger:film,
            start:'-70% 20%',
            end: 'bottom top',
            scrub:true,
            ease:'none',
            // markers:true
        }
    })
})