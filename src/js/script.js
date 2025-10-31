document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

 // GSAP Animation
 
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.8,    
    effects: true,    
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const circles = [
    "#circle6",
    "#circle5",
    "#circle4",
    "#circle3",
    "#circle2",
    "#circle1",
  ];
  gsap.set(circles, { transformOrigin: "50% 50%" });

  gsap.from(circles, {
    scale: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });

  const svg = document.querySelector("svg");
  document.addEventListener("mousemove", (e) => {
    const rect = svg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const factors = [5, 6, 8, 10, 14, 20]; 

    circles.forEach((circle, index) => {
      const factor = factors[index];
      gsap.to(circle, {
        x: -mouseX / factor,
        y: -mouseY / factor,
        duration: 1,
        ease: "power1.out",
      });
    });
  });

  gsap.fromTo(
    ".animate-hero",
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".animate-hero",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    }
  );

  if (window.innerWidth >= 768) {
     gsap.fromTo(
    ".md-animate-hero",
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.6,
      scrollTrigger: {
        trigger: ".animate-hero",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    }
  );
  }

   gsap.fromTo(
    ".animate-wrapper",
    { y: 70, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".animate-wrapper",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  const textElement = document.querySelector(".animate");
  let combinedText = textElement.textContent;

  const splitText = combinedText
    .split("")
    .map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`)
    .join("");
  textElement.innerHTML = splitText;

  const chars = textElement.querySelectorAll("span");

  gsap.to(chars, {
    color: "#ffffff", 
    background: "none", 
    stagger: 0.02,
    scrollTrigger: {
      trigger: textElement,
      start: "top 80%", 
      end: "top 20%", 
      scrub: 1, 
      markers: false, 
    },
  });
});



document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".card-wrapper", {
    opacity: 0,
    y: 80,
    duration: 1.3,
    stagger: 0.2,
    delay: 1, 
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".card-section",
      start: "top 100%",
      toggleActions: "play none none reverse"
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const textElement = document.querySelector(".stagerd-fade");
    const text = textElement.textContent;
    const chars = text.split("");
    textElement.innerHTML = chars
      .map(char => `<span class="char inline-block opacity-0">${char === " " ? "&nbsp;" : char}</span>`)
      .join("");

    gsap.fromTo(
      ".char",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: textElement,
          start: "top 80%",
        },
      }
    );
  });