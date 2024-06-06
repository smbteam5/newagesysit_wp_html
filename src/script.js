$(document).ready(function(){
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
    $('.brand_list').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
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
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
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
})