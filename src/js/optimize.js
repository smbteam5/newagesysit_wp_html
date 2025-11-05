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
  
  // Image preloader cache
  const imageCache = new Map();
  let preloadPromise = null;

  // Preload all background images with priority loading
  function preloadBackgroundImages() {
    if (preloadPromise) return preloadPromise;
    
    const slides = document.querySelectorAll('#industriesSwiper .swiper-slide[data-bg]');
    const imageUrls = Array.from(slides).map(slide => slide.dataset.bg);
    
    preloadPromise = Promise.allSettled(
      imageUrls.map((url, index) => {
        if (imageCache.has(url)) {
          return Promise.resolve(imageCache.get(url));
        }
        
        return new Promise((resolve, reject) => {
          const img = new Image();
          
          // Add loading attributes for better performance
          img.decoding = 'async';
          img.loading = 'eager'; // Load immediately for preloading
          
          // Set priority for first few images
          if (index < 3) {
            img.fetchpriority = 'high';
          }
          
          img.onload = () => {
            imageCache.set(url, img);
            resolve(img);
          };
          img.onerror = () => {
            console.warn(`Failed to preload image: ${url}`);
            reject(new Error(`Failed to load ${url}`));
          };
          
          // Start loading
          img.src = url;
        });
      })
    );
    
    return preloadPromise;
  }

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

  // Start preloading images immediately  
  preloadBackgroundImages().then(() => {
    console.log('Background images preloaded successfully');
  }).catch(error => {
    console.warn('Some background images failed to preload:', error);
  });

  /* ---------------- Industries slider ---------------- */
  let currentSelectedSlide = null;
  let isHovering = false;

  // Function to update slide selection
  function updateSlideSelection(slideElement) {
    if (!slideElement || slideElement === currentSelectedSlide) return;

    // Remove selection from all slides
    const allSlides = document.querySelectorAll('#industriesSwiper .swiper-slide');
    allSlides.forEach(slide => {
      slide.classList.remove('slide-selected');
      // Also remove any swiper-slide-active to prevent conflicts
      slide.classList.remove('swiper-slide-active');
    });

    // Add selection to current slide
    slideElement.classList.add('slide-selected');
    currentSelectedSlide = slideElement;

    // Update background with smooth transition
    if (slideElement.dataset && slideElement.dataset.bg) {
      swapBackground(slideElement.dataset.bg);
    }
    
    // Debug log (can be removed in production)
    console.log('Selected slide:', slideElement.querySelector('.slide-title')?.textContent || 'Unknown');
  }

  // Function to get first visible slide
  function getFirstVisibleSlide(swiper) {
    if (!swiper || !swiper.slides || swiper.slides.length === 0) return null;
    
    try {
      const swiperRect = swiper.el.getBoundingClientRect();
      let firstVisibleSlide = null;
      let maxVisibility = 0;
      
      for (let i = 0; i < swiper.slides.length; i++) {
        const slide = swiper.slides[i];
        const slideRect = slide.getBoundingClientRect();
        
        // Calculate visibility percentage
        const left = Math.max(slideRect.left, swiperRect.left);
        const right = Math.min(slideRect.right, swiperRect.right);
        const visibleWidth = Math.max(0, right - left);
        const visibilityPercentage = visibleWidth / slideRect.width;
        
        // If this slide is more visible than previous ones, select it
        if (visibilityPercentage > maxVisibility && visibilityPercentage > 0.3) {
          maxVisibility = visibilityPercentage;
          firstVisibleSlide = slide;
        }
      }
      
      // If no slide is sufficiently visible, return first slide
      return firstVisibleSlide || swiper.slides[0];
    } catch (error) {
      console.warn('Error getting first visible slide:', error);
      return swiper.slides[0] || null;
    }
  }

  const industriesSwiper = new Swiper("#industriesSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    loop: false,
    grabCursor: true,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 2,
    },
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
        // Set first background immediately for better perceived performance
        const first = sw.slides[sw.activeIndex];
        if (first && first.dataset && first.dataset.bg) {
          // Check if first image is already cached
          if (imageCache.has(first.dataset.bg)) {
            swapBackground(first.dataset.bg);
          } else {
            // Load first image with high priority
            const firstImg = new Image();
            firstImg.decoding = 'async';
            firstImg.fetchpriority = 'high';
            firstImg.onload = () => {
              imageCache.set(first.dataset.bg, firstImg);
              swapBackground(first.dataset.bg);
            };
            firstImg.onerror = () => {
              console.warn('Failed to load first background image');
            };
            firstImg.src = first.dataset.bg;
          }
        }

        // Select first visible slide by default
        setTimeout(() => {
          const firstVisible = getFirstVisibleSlide(sw);
          if (firstVisible && !isHovering) {
            updateSlideSelection(firstVisible);
          }
        }, 100);
      },
      slideChange(sw) {
        // When user swipes/navigates, select the first visible slide
        if (!isHovering) {
          setTimeout(() => {
            const firstVisible = getFirstVisibleSlide(sw);
            if (firstVisible) {
              updateSlideSelection(firstVisible);
            }
          }, 50);
        }
      },
      transitionEnd(sw) {
        // Ensure selection is correct after transition
        if (!isHovering) {
          const firstVisible = getFirstVisibleSlide(sw);
          if (firstVisible) {
            updateSlideSelection(firstVisible);
          }
        }
      },
    },
  });

  /* ---------------- Hover/focus previews with selection ---------------- */
  function attachPreviewHandlers(slideEl) {
    if (!slideEl) return;

    const handleMouseEnter = () => {
      isHovering = true;
      updateSlideSelection(slideEl);
    };

    const handleFocus = () => {
      isHovering = true;
      updateSlideSelection(slideEl);
    };

    const handleBlur = () => {
      isHovering = false;
      setTimeout(() => {
        if (!isHovering) {
          const firstVisible = getFirstVisibleSlide(industriesSwiper);
          if (firstVisible) {
            updateSlideSelection(firstVisible);
          }
        }
      }, 100);
    };

    const handleClick = () => {
      // get index without spreading (works with NodeList/HTMLCollection)
      const idx = Array.prototype.indexOf.call(
        industriesSwiper.slides,
        slideEl
      );
      if (idx >= 0) {
        isHovering = false;
        industriesSwiper.slideTo(idx);
        // Selection will be updated by slideChange event
      }
    };

    // Avoid double-binding on resize: remove any previous handlers first
    slideEl.onmouseenter = handleMouseEnter;
    slideEl.onfocus = handleFocus;
    slideEl.onblur = handleBlur;
    slideEl.onclick = handleClick;
  }

  // attach once after init
  Array.prototype.forEach.call(industriesSwiper.slides, attachPreviewHandlers);

  // Add swiper container mouse leave handler
  const swiperContainer = document.getElementById('industriesSwiper');
  if (swiperContainer) {
    swiperContainer.addEventListener('mouseleave', () => {
      isHovering = false;
      setTimeout(() => {
        if (!isHovering) {
          const firstVisible = getFirstVisibleSlide(industriesSwiper);
          if (firstVisible) {
            updateSlideSelection(firstVisible);
          }
        }
      }, 50);
    });
  }

  industriesSwiper.on("resize", () => {
    Array.prototype.forEach.call(
      industriesSwiper.slides,
      attachPreviewHandlers
    );
    
    // Re-select first visible slide after resize
    if (!isHovering) {
      setTimeout(() => {
        const firstVisible = getFirstVisibleSlide(industriesSwiper);
        if (firstVisible) {
          updateSlideSelection(firstVisible);
        }
      }, 100);
    }
  });

  // Add window resize handler for responsive updates
  window.addEventListener('resize', () => {
    if (!isHovering) {
      setTimeout(() => {
        const firstVisible = getFirstVisibleSlide(industriesSwiper);
        if (firstVisible) {
          updateSlideSelection(firstVisible);
        }
      }, 200);
    }
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