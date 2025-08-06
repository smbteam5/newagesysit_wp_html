$(document).ready(function () {
  const tabs = document.querySelectorAll(".tab-nav button");
  const tabContents = document.querySelectorAll(".tab-content .tab-c");

  tabs.forEach((tab, index) => {
    tabContents[0].classList.remove("hidden");
    //tabs.classList.remove('active-tab');
    tabs[0].classList.add("active-tab");
    tab.addEventListener("click", () => {
      // Hide all tab contents
      tabContents.forEach((content) => content.classList.add("hidden"));
      tabs.forEach((content) => content.classList.remove("active-tab"));
      // Show the clicked tab content
      tabContents[index].classList.remove("hidden");
      tabs[index].classList.add("active-tab");
    });
  });

  // counter animation
  var $animation_elements = $(".animation-element");
  var $window = $(window);
  var $counter_wrap = $(".counter_wrap");
  var isAlreadyRun = false;

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;
    $.each($counter_wrap, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;
      //check to see if this current container is within viewport
      if (element_top_position <= window_bottom_position) {
        $element.addClass("in-view");
        console.log("test");
        if (isAlreadyRun) {
          $element.find(".count-number .no-i").each(function () {
            $(this)
              .prop("Counter", 0)
              .animate(
                {
                  Counter: $(this).text(),
                },
                {
                  duration: 1500,
                  easing: "swing",
                  step: function (now) {
                    $(this).text(Math.ceil(now));
                  },
                }
              );
          });
        }
        isAlreadyRun = false;
      } else {
        $element.removeClass("in-view");
      }
    });
  }
  $window.on("scroll resize", check_if_in_view);
  $window.trigger("scroll");
  // video popup
  const videoThumbnails = document.querySelectorAll(".video-thumbnail");
  const videoModal = document.getElementById("videoModal");
  const youtubePlayer = document.getElementById("youtubePlayer");
  const closeModal = document.getElementById("closeModal");
  const body = document.querySelector("body");
  videoThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const videoId = thumbnail.getAttribute("data-video-id");
      const videoURL = `https://www.youtube.com/embed/${videoId}`;
      videoModal.classList.remove("hidden");
      body.classList.add("modal-open");
      youtubePlayer.src = videoURL;
    });
  });

  closeModal.addEventListener("click", () => {
    videoModal.classList.add("hidden");
    body.classList.remove("modal-open");
    youtubePlayer.src = "";
  });
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  // Hamburger menu
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  } else {
    console.error("Mobile menu button or menu element not found.");
  }

  // Dropdown mobile
  if (dropdownToggles.length > 0) {
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const dropdown = toggle.nextElementSibling;
        const otherDropdowns = document.querySelectorAll(".dropdown");

        if (dropdown) {
          otherDropdowns.forEach((d) => {
            if (d !== dropdown) {
              d.classList.add("hidden");
            }
          });

          dropdown.classList.toggle("hidden");

          const svgElement = toggle.querySelector("svg");
          if (svgElement) {
            svgElement.classList.toggle("rotate-180");
          } else {
            console.error("SVG element not found within the toggle.");
          }
        } else {
          console.error("Dropdown element not found.");
        }
      });
    });
  } else {
    console.error("Dropdown toggle elements not found.");
  }

  window.addEventListener("click", (event) => {
    if (
      !event.target.matches(".dropdown-toggle") &&
      !event.target.closest(".dropdown")
    ) {
      dropdownToggles.forEach((toggle) => {
        const dropdown = toggle.nextElementSibling;
        if (dropdown) {
          dropdown.classList.add("hidden");
        }
        const svgElement = toggle.querySelector("svg");
        if (svgElement) {
          svgElement.classList.remove("rotate-180");
        }
      });
    }
  });

  // Accordion function
  window.toggleAccordion = (button) => {
    const content = button.nextElementSibling;
    const isOpen = content && content.classList.contains("show");

    // Close all accordion items
    const accordionItems = document.querySelectorAll(".accordion-content");
    accordionItems.forEach((item) => {
      item.classList.remove("show");
    });

    // Rotate all accordion icons
    const accordionIcons = document.querySelectorAll(".transform");
    accordionIcons.forEach((icon) => {
      icon.classList.remove("rotate-180");
    });

    // Open the clicked accordion item if it was closed
    if (content && !isOpen) {
      content.classList.add("show");
      const spanElement = button.querySelector("span:last-child");
      if (spanElement) {
        spanElement.classList.add("rotate-180");
      } else {
        console.error("Span element for accordion icon not found.");
      }
    } else if (!content) {
      console.error("Accordion content element not found.");
    }
  };

  // navigation portfolio

  $(document).ready(function () {
    $(window)
      .resize(function () {
        var $slider = $("#portfolio-nav");
        if ($(window).width() < 1050) {
          $(".portfolio-nav").slick({
            variableWidth: true,
            slidesToShow: 6,
            slidesToScroll: 6,
            arrows: false,
            dots: false,
            infinite: false,
            autoplay: false,
            responsive: [
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
            ],
          });
        } else {
          $slider.removeClass("portfolio-nav");
          $slider.slick("setPosition");
        }
      })
      .resize();
  });
  $(".brand_list").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 0,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  // Global clientele
  $(".clientele").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 0,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".cs_items").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".modal_items").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // video_list
  $(".video_list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // pf_list
  $(".pf_list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 0,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  // pf_listz
  $(".pf_listz").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 0,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  //dev-services-slider
  var slider = $(".dev-services-slider");
  slider.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".ds_prev"),
    nextArrow: $(".ds_next"),
    dots: false,
    initialSlide: 0, // Starts at the first slide
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  var container = document.querySelector(".container");
  var containerWidth = container.offsetWidth;
  var viewportWidth = window.innerWidth;
  var leftSpace = (viewportWidth - containerWidth) / 2;
  // console.log("containerWidth",leftSpace);
  $(".dev-services-slider.slick-slider").css("left", leftSpace + "px");
  slider.on("beforeChange", function () {
    slider.find(".dev-services-slider .slick-track").css("transform", "");
    $(".dev-services-slider .slick-list").css("margin-left", "0");
    $(".dev-services-slider.slick-slider").css("left", "0px");
  });

  var devopSlider = $(".devops-slider");
  devopSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".devops_prev"),
    nextArrow: $(".devops_next"),
    dots: false,
    initialSlide: 0, // Starts at the first slide
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //dev-services-slider with 4 slides

  var slider_4 = $(".dev-services-slider_4");
  slider_4.slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $(".ds_prev_new"),
    nextArrow: $(".ds_next_new"),
    dots: false,
    initialSlide: 0, // Starts at the first slide
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  var slider_3 = $(".dev-services-slider_3");
  slider_3.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".ds_prev_3"),
    nextArrow: $(".ds_next_3"),
    dots: false,
    initialSlide: 0, // Starts at the first slide
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  var blog_slider = $(".blog_slider");
  blog_slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".blog_next"),
    nextArrow: $(".blog_prev"),
    dots: false,
    initialSlide: 0, // Starts at the first slide
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  const typeTabs = document.querySelectorAll(".type-tab button");
  const typeTabContents = document.querySelectorAll(".type-tab-content .tab-c");

  let activeIndex = 0;

  // Initial state
  typeTabContents[0].classList.remove("opacity-0", "pointer-events-none");
  typeTabContents[0].classList.add("opacity-100");
  typeTabs[0].classList.add("active-tab-type");

  typeTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (index === activeIndex) return;

      // Fade out current
      typeTabContents[activeIndex].classList.remove("opacity-100");
      typeTabContents[activeIndex].classList.add(
        "opacity-0",
        "pointer-events-none"
      );
      typeTabs[activeIndex].classList.remove("active-tab-type");

      // Fade in new
      typeTabContents[index].classList.remove(
        "opacity-0",
        "pointer-events-none"
      );
      typeTabContents[index].classList.add("opacity-100");
      typeTabs[index].classList.add("active-tab-type");

      activeIndex = index;
    });
  });
});

var health_slider = $(".healthcare-slider");
health_slider.slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".health_prev"),
  nextArrow: $(".health_next"),
  dots: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1441, // ≤1440px
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1025, // ≤1024px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769, // ≤768px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500, // ≤500px
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
 var health_slider_golang = $(".healthcare-slider-go");
health_slider_golang.slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".health_prev_go"),
  nextArrow: $(".health_next_go"),
  dots: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1441, // ≤1440px
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1025, // ≤1024px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769, // ≤768px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500, // ≤500px
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// var health_slider = $(".healthcare-slider");
// health_slider.slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: true,
//   dots: false,
//   infinite: true,
//   prevArrow: $(".health_prev"),
//   nextArrow: $(".health_next"),
//   responsive: [
//     { breakpoint: 1024, settings: { slidesToShow: 2 } },
//     { breakpoint: 640, settings: { slidesToShow: 1 } },
//   ],
// });

var eco_slider = $(".eco-slider");
eco_slider.slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: $(".eco_prev"),
  nextArrow: $(".eco_next"),
  dots: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1025, // ≤1024px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 769, // ≤768px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 500, // ≤500px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

var case_slider = $(".case-study-slider");

case_slider.on("init", function () {
  // re-check visibility on init
  if (window.innerWidth < 768) {
    $(".case_prev, .case_next").hide();
  } else {
    $(".case_prev, .case_next").show();
  }
});
case_slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $(".case_prev"),
  nextArrow: $(".case_next"),
  dots: true,
  initialSlide: 0, // Starts at the first slide
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

var client_slider = $(".client-feedback-slider");

client_slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  initialSlide: 0, // Starts at the first slide
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

var case_slider = $(".health-case-study-slider");

// Function to toggle navigation buttons
function toggleSliderNav() {
  if (window.innerWidth < 768) {
    $(".case_prev, .case_next").hide();
  } else {
    $(".case_prev, .case_next").show();
  }
}

// On init
case_slider.on("init", function () {
  toggleSliderNav();
});

// On window resize
$(window).on("resize", function () {
  toggleSliderNav();
});

// Initialize slick
case_slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $(".case_prev"),
  nextArrow: $(".case_next"),
  dots: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

var case_new_slider = $(".health-case-study-new-slider");

// Function to initialize or destroy slick based on screen width
function initOrDestroySlider() {
  if (window.innerWidth < 1024) {
    if (!case_new_slider.hasClass("slick-initialized")) {
      case_new_slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // No prev/next buttons
        dots: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  } else {
    if (case_new_slider.hasClass("slick-initialized")) {
      case_new_slider.slick("unslick");
    }
  }
}

// Init on load
$(document).ready(function () {
  initOrDestroySlider();
});

// Re-check on resize
$(window).on("resize", function () {
  initOrDestroySlider();
});

var slider = $(".industry-slider");
var isSliderInitialized = false;

function initializeSlider() {
  if (window.innerWidth >= 768) {
    if (!isSliderInitialized) {
      slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".industry_prev"),
        nextArrow: $(".industry_next"),
        dots: true,
        initialSlide: 0,
      });
      isSliderInitialized = true;
    }
  } else {
    if (isSliderInitialized) {
      slider.slick("unslick");
      isSliderInitialized = false;
    }
  }
}

// Run on page load
initializeSlider();

// Run on window resize
$(window).on("resize", function () {
  initializeSlider();
});
