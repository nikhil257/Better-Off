gsap.to('.page1-heading',{
    scale : 1.2,
    marginTop: "8%",
    scrollTrigger : {
        trigger : ".page1-heading",
        scroller: "body",
        start : "top 50%",
        end : "top 0",
        scrub : 2,
    }
})

gsap.from('.page2-content p',{
    y :50,
    opacity : 0,
    stagger : 0.15,
    duration : 0.7,
    scrollTrigger : {
        trigger : '.page2-content',
        scroller : 'body',
        start : "top 60%",
    }
})

gsap.from('.page2-content2 p',{
    y :50,
    opacity : 0,
    stagger : 0.15,
    duration : 0.7,
    scrollTrigger : {
        trigger : '.page2-content',
        scroller : 'body',
        start : "top 60%", 
    }
})