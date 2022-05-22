$(document).ready(function(){
      $('.testimonial_slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
            responsive: [
              {
                  breakpoint: 767.98,
                  settings: {
                    infinite: true,
                     slidesToShow: 1,
                    dots: true
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    infinite: true,
                     slidesToShow: 2,
                    dots: true
                  }
                },
                {
                  breakpoint: 1114,
                  settings: {
                    infinite: true,
                     slidesToShow: 1,
                    dots: true
                  }
                }
  
            ]
          
        });

    //  $('.testimonial_slider').slick('unslick');

      });


    