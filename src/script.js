$(document).ready(function(){
// counter animation
var $animation_elements = $('.animation-element');
var $window = $(window);
var $counter_wrap = $('.counter_wrap')
var isAlreadyRun = false;

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    $.each($counter_wrap, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        //check to see if this current container is within viewport
        if ((element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
            console.log("test");
            if (isAlreadyRun) {
                $element.find('.count-number .no-i').each(function() {

                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }
                    , 
                    {
                        duration: 1500,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
            isAlreadyRun = false;
        } else {
            $element.removeClass('in-view');
        }
    });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
  // video popup
  const videoThumbnails = document.querySelectorAll('.video-thumbnail');
  const videoModal = document.getElementById('videoModal');
  const youtubePlayer = document.getElementById('youtubePlayer');
  const closeModal = document.getElementById('closeModal');
  const body = document.querySelector('body');
  videoThumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
          const videoId = thumbnail.getAttribute('data-video-id');
          const videoURL = `https://www.youtube.com/embed/${videoId}`;
          videoModal.classList.remove('hidden');
          body.classList.add('modal-open');
          youtubePlayer.src = videoURL;

      });
  });

  closeModal.addEventListener('click', () => {
      videoModal.classList.add('hidden');
      body.classList.remove('modal-open');
      youtubePlayer.src = '';
  });
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// Hamburger menu
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
} else {
  console.error('Mobile menu button or menu element not found.');
}

// Dropdown mobile
if (dropdownToggles.length > 0) {
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const dropdown = toggle.nextElementSibling;
      const otherDropdowns = document.querySelectorAll('.dropdown');

      if (dropdown) {
        otherDropdowns.forEach((d) => {
          if (d !== dropdown) {
            d.classList.add('hidden');
          }
        });

        dropdown.classList.toggle('hidden');

        const svgElement = toggle.querySelector('svg');
        if (svgElement) {
          svgElement.classList.toggle('rotate-180');
        } else {
          console.error('SVG element not found within the toggle.');
        }
      } else {
        console.error('Dropdown element not found.');
      }
    });
  });
} else {
  console.error('Dropdown toggle elements not found.');
}

window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown-toggle') && !event.target.closest('.dropdown')) {
    dropdownToggles.forEach((toggle) => {
      const dropdown = toggle.nextElementSibling;
      if (dropdown) {
        dropdown.classList.add('hidden');
      }
      const svgElement = toggle.querySelector('svg');
      if (svgElement) {
        svgElement.classList.remove('rotate-180');
      }
    });
  }
});

// Accordion function
window.toggleAccordion = (button) => {
  const content = button.nextElementSibling;
  const isOpen = content && content.classList.contains('show');

  // Close all accordion items
  const accordionItems = document.querySelectorAll('.accordion-content');
  accordionItems.forEach(item => {
    item.classList.remove('show');
  });

  // Rotate all accordion icons
  const accordionIcons = document.querySelectorAll('.transform');
  accordionIcons.forEach(icon => {
    icon.classList.remove('rotate-180');
  });

  // Open the clicked accordion item if it was closed
  if (content && !isOpen) {
    content.classList.add('show');
    const spanElement = button.querySelector('span:last-child');
    if (spanElement) {
      spanElement.classList.add('rotate-180');
    } else {
      console.error('Span element for accordion icon not found.');
    }
  } else if (!content) {
    console.error('Accordion content element not found.');
  }
};

// navigation portfolio
$('.portfolio-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  speed: 300,
  infinite: true,
  autoplaySpeed: 2000,
  focusOnSelect: true,
  autoplay: true,
  responsive: [
{
  breakpoint: 991,
  settings: {
    slidesToShow: 4,
  }
},
{
  breakpoint: 767,
  settings: {
    slidesToShow: 3,
  }
}
]
});


$('.brand_list').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 5000,
  autoplaySpeed: 0,
  autoplay: true,
  cssEase: 'linear',
  responsive: [
{
  breakpoint: 991,
  settings: {
    slidesToShow: 3,
  }
},
{
  breakpoint: 767,
  settings: {
    slidesToShow: 3,
  }
},
{
  breakpoint: 500,
  settings: {
    slidesToShow: 2,
  }
}
]
});

// Global clientele
$('.clientele').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 5000,
  autoplaySpeed: 0,
  autoplay: true,
  cssEase: 'linear',
  responsive: [
{
  breakpoint: 991,
  settings: {
    slidesToShow: 3,
  }
},
{
  breakpoint: 767,
  settings: {
    slidesToShow: 3,
  }
},
{
  breakpoint: 500,
  settings: {
    slidesToShow: 2,
  }
}
]
});
      $('.cs_items').slick({
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
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
      });
    // video_list
    $('.video_list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
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
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
      });
    // pf_list
    $('.pf_list').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: true,        
      speed: 5000,
      autoplaySpeed: 0,
      autoplay: true,
      cssEase: 'linear',
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
    });
        // pf_listz
        $('.pf_listz').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          infinite: true,        
          speed: 5000,
          autoplaySpeed: 0,
          autoplay: true,
          cssEase: 'linear',
          responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
        });
    //dev-services-slider
    var slider = $('.dev-services-slider');
    slider.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.ds_prev'),
            nextArrow: $('.ds_next'),
            dots: false,
            initialSlide: 0, // Starts at the first slide
            responsive: [
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]
        });
        var container = document.querySelector('.container');
        var containerWidth = container.offsetWidth;
        var viewportWidth = window.innerWidth;
        var leftSpace = (viewportWidth - containerWidth) / 2;
        // console.log("containerWidth",leftSpace);
        $('.dev-services-slider.slick-slider').css('left', leftSpace + 'px');
        slider.on('beforeChange', function(){
          slider.find('.dev-services-slider .slick-track').css('transform', '');
          $('.dev-services-slider .slick-list').css('margin-left', '0');
          $('.dev-services-slider.slick-slider').css('left', '0px');
        });
})