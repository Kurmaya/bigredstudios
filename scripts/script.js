gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);
const filmImages = document.querySelectorAll('.film img');
const filmHolders = document.querySelectorAll('.film-wrapper');
const filmBacks = document.querySelectorAll('.film-back');
const targets = document.querySelectorAll('.split');
const splitTexts = document.querySelectorAll('.split-text');



splitTexts.forEach((text,i)=>{
let splitWords = new SplitText(text,{type:'words,lines'});
let words = splitWords.words;
if(i == 2){
    words= splitWords.lines;
}
else {
  words= splitWords.words;  
}
gsap.from(words,{
    y:30,
    rotateX:'80deg',
    opacity:0,
    stagger:0.2,
    ease:'back.out',
    
    scrollTrigger:{
        trigger:'#second',
        start:'top 40%',
        end:'70% 80%',
        scrub:true,
        // markers:true
    }
})

})



targets.forEach(target=>{
let splitText = new SplitText(target,{type:'words,chars'});
let chars = splitText.chars;
gsap.from(chars,{
    y:10,
    opacity:0,
    stagger:.2,
    rotate:10,
    ease:'none',
    scrollTrigger:{
        trigger:target,
        scrub:true,
        start:'top bottom',
        end:'top 20%',
        // markers:true
    }
})

})




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
        // markers:true,
        scrub: true,
        ease:'power1.out',
   

    }
})
tl.to('.red',{
    color:'red',
})
tl.to('.hero-scroll-text',{
    left:'-120%',
    ease:'none',
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
        trigger:'#content2',
        start:'top 90%',
        end: 'center 100%',
        scrub:'true',
        // markers:true,
    }
})



tl2.to('#hero',{
    opacity:'0',
})

// tl2.from('#second button',{
//     opacity:'0',
//     y:150,
// },'<')


filmImages.forEach(film=>{
    if(film.classList.contains('fowl')){
        // console.log(film);
         gsap.from(film,{
        objectPosition:'50% 80%',
        opacity:'.8',
        scale:'.95',
        scrollTrigger:{
            trigger:film,
            start:'-80% 20%',
            end: '-50% top',
            scrub:true,
            ease:'none',
            // markers:true
        }
    })
    }
    else{
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
    }
    
})
const services= document.querySelectorAll('.service');
 
services.forEach((s,i)=>{
   if(window.innerWidth>1000){
          ScrollTrigger.create({
        trigger:s,
        start:'-15% top',
        scrub:true,
        pin:true,
        pinSpacing:false,
    })
    }
  
})

ScrollTrigger.create({
    trigger:'#services',
    start:'top 90%',
    end:"+=" + 50 *(services.length -1) + "%"
})