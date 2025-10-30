gsap.registerPlugin(ScrollTrigger);
      document.querySelectorAll(".animatedText").forEach((section) => {
        const textEl = section.querySelectorAll("span");
        gsap.to(textEl, {
          scrollTrigger: {
            trigger: textEl,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
          backgroundPositionX: "0%", 
          stagger: 0.5,
          ease: "none",
        });
      });
function createContinuousSwiper(selector, reverse = false) {
const swiper = new Swiper(selector, {
    direction: "vertical",
    loop: true,
    slidesPerView: 2,
    spaceBetween: 5,
    allowTouchMove: false,
    speed: 20000,
    autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: reverse,
    },
    freeMode: true,
    freeModeMomentum: false,

    breakpoints: {
    0: {
        direction: "horizontal",
        slidesPerView: 1.2,
        spaceBetween: 10,
    },
    768: {
        direction: "horizontal",
        slidesPerView: 2.2,
        spaceBetween: 10,
    },
    1024: {
        direction: "vertical",
        slidesPerView: 2,
        spaceBetween: 5,
    },
    },
});

swiper.autoplay.start();
return swiper;
}

createContinuousSwiper(".swiper-up", false); // scroll upward
createContinuousSwiper(".swiper-down", true); // scroll downward

// accordion
 (function () {
        const buttons = document.querySelectorAll(".accordion-button");

        // buttons.classList.remove("border-b", "border-white/30");
        function addTransitionClasses(panel) {
          panel.classList.add(
            "overflow-hidden",
            "transition-[height]",
            "duration-300",
            "ease-out"
          );
        }

        function openPanel(btn, panel, chevron) {
          // prepare
          panel.classList.remove("hidden");
          panel.style.height = "0px";
          // force reflow
          panel.offsetHeight; // eslint-disable-line no-unused-expressions
          // animate to full height
          panel.style.height = panel.scrollHeight + "px";

          const onEnd = (e) => {
            if (e.propertyName !== "height") return;
            panel.style.height = "auto"; // let it grow naturally after animation
            panel.removeEventListener("transitionend", onEnd);
          };
          panel.addEventListener("transitionend", onEnd);

          btn.setAttribute("aria-expanded", "true");
          btn.classList.add("border-b", "border-[#ffffff29]");
          if (chevron) chevron.classList.add("rotate-180");
        }

        function closePanel(btn, panel, chevron) {
          // from current auto/height to 0
          panel.style.height = panel.scrollHeight + "px";
          // force reflow
          panel.offsetHeight; // eslint-disable-line no-unused-expressions
          panel.style.height = "0px";

          const onEnd = (e) => {
            if (e.propertyName !== "height") return;
            panel.classList.add("hidden");
            panel.style.height = ""; // cleanup
            panel.removeEventListener("transitionend", onEnd);
          };
          panel.addEventListener("transitionend", onEnd);

          btn.setAttribute("aria-expanded", "false");
          btn.classList.remove("border-b", "border-[#ffffff29]");
          if (chevron) chevron.classList.remove("rotate-180");
        }

        // init
        buttons.forEach((btn) => {
          const targetSel = btn.getAttribute("data-target");
          const panel = document.querySelector(targetSel);
          const chevron = btn.querySelector(".chev");
          if (!panel) return;

          addTransitionClasses(panel);

          const initExpanded = btn.getAttribute("aria-expanded") === "true";
          if (initExpanded) {
            panel.classList.remove("hidden");
            panel.style.height = "auto";
            btn.classList.add("border-b", "border-[#ffffff29]"); //border-[#ffffff29]
            if (chevron) chevron.classList.add("rotate-180");
          } else {
            panel.classList.add("hidden");
            panel.style.height = "0px";
          }

          btn.addEventListener("click", () => {
            const isOpen = btn.getAttribute("aria-expanded") === "true";

            // (Optional) close others within the same accordion
            const accordionRoot = btn.closest(".accordion");
            if (accordionRoot) {
              accordionRoot
                .querySelectorAll(".accordion-button[aria-expanded='true']")
                .forEach((openBtn) => {
                  if (openBtn === btn) return;
                  const tgt = document.querySelector(
                    openBtn.getAttribute("data-target")
                  );
                  const chev = openBtn.querySelector(".chev");
                  if (tgt && !tgt.classList.contains("hidden")) {
                    closePanel(openBtn, tgt, chev);
                  }
                });
            }

            if (isOpen) {
              closePanel(btn, panel, chevron);
            } else {
              openPanel(btn, panel, chevron);
            }
          });
        });
      })();

    //   popups
 $(function () {
        $(".popup-youtube, .popup-vimeo").magnificPopup({
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });
      });

      // Calendly popup
      $(".calendly-popup").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
          patterns: {
            calendly: {
              index: "calendly.com/",
              id: function (url) {
                return url;
              },
              src: "%id%",
            },
          },
        },
      });
      
// owl carousel
 $(document).ready(function () {
    const $carousel = $(".owl-carousel");
    if ($carousel.length > 0) {
    try {
    $carousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: false,
        items: 1,
        responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 2,
        },
        },
        // navText: [
        //   '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>',
        //   '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>',
        // ],
        onInitialized: function (event) {
        console.log(
            "Owl Carousel initialized successfully with",
            event.item.count,
            "items"
        );
        },
        onChanged: function (event) {
        console.log("Slide changed to:", event.item.index);
        },
    });

    console.log("Owl Carousel initialization attempted");
    } catch (error) {
    console.error("Error initializing Owl Carousel:", error);
    }
    } else {
    console.error("No .owl-carousel elements found in the DOM");
    console.log(
    'Available elements with "owl" class:',
    $('[class*="owl"]').length
    );
    }
    });

    // slider testimonials
    document.addEventListener("DOMContentLoaded", () => {
        /* ---------------- Testimonials slider ---------------- */
        const testimonialsSwiper = new Swiper(".ctt_testimonials", {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: false,
          autoHeight: true,
          grabCursor: true,
          keyboard: { enabled: true },
          mousewheel: { forceToAxis: true },
          pagination: { el: ".testimonial-pagination", clickable: true },
          navigation: {
            nextEl: ".swiper-button-next__tl",
            prevEl: ".swiper-button-prev__tl",
          },
          // keep layout reactive
          observer: true,
          observeParents: true,
        });

        /* ---------------- Background swap helpers ---------------- */
        const bg = document.getElementById("heroBg");
        const bgPrev = document.getElementById("heroBgPrev");

        function swapBackground(url) {
          if (!bg || !bgPrev || !url) return;
          const currentUrl = bg.style.backgroundImage;

          if (currentUrl) {
            bgPrev.style.backgroundImage = currentUrl;
            bgPrev.style.opacity = 1;
            // force reflow so CSS transition runs
            void bgPrev.offsetWidth;
          }
          bg.style.backgroundImage = `url("${url}")`;
          requestAnimationFrame(() => {
            bgPrev.style.opacity = 0;
          });
        }

        /* ---------------- Industries slider ---------------- */
        const industriesSwiper = new Swiper("#industriesSwiper", {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: false,
          loop: false,
          grabCursor: true,
          breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 0 },
            960: { slidesPerView: 3, spaceBetween: 0 },
            1280: { slidesPerView: 4, spaceBetween: 0 },
          },
          navigation: {
            nextEl: ".swiper-navs .swiper-button-next",
            prevEl: ".swiper-navs .swiper-button-prev",
          },
          pagination: { el: ".swiper-pagination", enabled: false },
          observer: true,
          observeParents: true,
          on: {
            init(sw) {
              const first = sw.slides[sw.activeIndex];
              if (first && first.dataset && first.dataset.bg) {
                swapBackground(first.dataset.bg);
              }
            },
            slideChange(sw) {
              const active = sw.slides[sw.activeIndex];
              if (active && active.dataset && active.dataset.bg) {
                swapBackground(active.dataset.bg);
              }
            },
          },
        });

        /* ---------------- Hover/focus previews ---------------- */
        function attachPreviewHandlers(slideEl) {
          if (!slideEl) return;

          const show = () => {
            const url = slideEl.dataset ? slideEl.dataset.bg : "";
            if (url) swapBackground(url);
          };
          const reset = () => {
            const active =
              industriesSwiper.slides[industriesSwiper.activeIndex];
            const url = active && active.dataset ? active.dataset.bg : "";
            if (url) swapBackground(url);
          };

          // Avoid double-binding on resize: remove any previous handlers first
          slideEl.onmouseenter = show;
          slideEl.onfocus = show;
          slideEl.onmouseleave = reset;
          slideEl.onblur = reset;
          slideEl.onclick = () => {
            // get index without spreading (works with NodeList/HTMLCollection)
            const idx = Array.prototype.indexOf.call(
              industriesSwiper.slides,
              slideEl
            );
            if (idx >= 0) industriesSwiper.slideTo(idx);
          };
        }

        // attach once after init
        Array.prototype.forEach.call(
          industriesSwiper.slides,
          attachPreviewHandlers
        );

        industriesSwiper.on("resize", () => {
          Array.prototype.forEach.call(
            industriesSwiper.slides,
            attachPreviewHandlers
          );
        });
      });

 document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);
        const elementsToAnimate = document.querySelectorAll(
          ".animation-element:not(.initial-visible)"
        );
        
        elementsToAnimate.forEach((element) => {
          gsap.from(element, {
            y: 50, // Start 50 pixels lower (will slide up to its final position)
            opacity: 0, // Start invisible
            duration: 0.8, // Animation duration
            ease: "power2.out",
            scrollTrigger: {
              trigger: element, // Use the current element in the loop as the trigger point
              start: "top 95%", // Start the animation when the top of the element hits 95% down the viewport (near the bottom)
              toggleActions: "play none none none", // Play the animation once when entering the view
              // markers: true, // Uncomment this line to see the ScrollTrigger debugging lines
            },
          });
        });

        const initialElement = document.querySelector(
          ".animation-element.initial-visible"
        );
        if (initialElement) {
          gsap.from(initialElement, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2,
          });
        }
      });