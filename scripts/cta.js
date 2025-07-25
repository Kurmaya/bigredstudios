const nav = document.querySelector('.nav-bar');
const close = document.querySelector('.close');

close.addEventListener('click',()=>{
    nav.classList.toggle('active');
})

document.addEventListener('DOMContentLoaded',()=>{
        const tick = document.querySelector('.cta');
        const inner = tick.querySelector('.ticker-wrap');
        const content = tick.querySelector('.ticker-text');
        const duration = tick.getAttribute('data-duration')
        inner.append(content.cloneNode(true));
        const animations =[];
        inner.querySelectorAll('.ticker-text').forEach(ticker=>{
const animation = gsap.to(ticker,{
    x:'-100%',
    repeat:-1,
    duration:10,
    ease:'none'
})
        })
    })

    const y = document.querySelector('.cYear');
y.textContent= new Date().getFullYear();