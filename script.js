function randomImage() {
  var arr = [
    "https://www.datocms-assets.com/106915/1717687450-betteroffstudio_work-loop_24.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687460-betteroffstudio_work-loop_26.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687178-betteroffstudio_work-loop_10.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687398-betteroffstudio_work-loop_14.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687414-betteroffstudio_work-loop_18-1.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687151-betteroffstudio_work-loop_5.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687440-betteroffstudio_work-loop_22.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800",
  ];

  var randomNumber = Math.floor(Math.random() * arr.length);
  var img = document.querySelector(".text-div img");
  img.setAttribute("src", arr[randomNumber]);
}

function page1Animation() {
  gsap.to(".page1-heading", {
    scale: 1.2,
    marginTop: "8%",
    scrollTrigger: {
      trigger: ".page1-heading",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });
}

function page2Animation() {
  gsap.from(".page2-content p", {
    y: 50,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".page2-content",
      scroller: "body",
      start: "top 60%",
    },
  });

  gsap.from(".page2-content2 p", {
    y: 50,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".page2-content",
      scroller: "body",
      start: "top 60%",
    },
  });
}

function page4Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      scroller: "body",
      start: "top -7%",
      end: "top -80%",
      scrub: 3,
      markers: true,
      pin: true,
    },
  });

  tl.to(".page4-heading", {
    gap: 500,
  });

  tl.to(".page4-video", {
    opacity: 1,
  });

  tl.to(".page4-video", {
    scale: 3,
    width: "fit-content",
    left: "50%",
    top: "68%",
    transform: " translate(-50%,-50%)",
  });
}

randomImage();
page1Animation();
page2Animation();
page4Animation();
