gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
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
        end:'90% bottom',
        pin:true,
        pinSpacing:false,
        // markers:true,
        scrub: true,


    }
})
tl.to('.hero-scroll-text',{
    left:'-150%',
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
    zIndex:'1',
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
        start:'25% top',
        end: 'center center',
        scrub:'true',
        markers:true,
    }
})
tl2.to('.f-one',{
    opacity:'0',
})

tl2.from('#second h2',{
    opacity:'0',
    x:50,
},'<')