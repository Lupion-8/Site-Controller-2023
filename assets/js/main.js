$(function () {

    "use strict";

    //===== Prealoder

   /* $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });*/


    //===== Sticky evento do head

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar .navbar-brand img").attr("src", "assets/images/lggo.avif");
            $(".logohead").removeClass("logoHeadMove");
        } else {
            $(".navbar-area").addClass("sticky");
            //$(".navbar .navbar-brand img").attr("src", "assets/images/lggo.png");
            $(".logohead").addClass("logoHeadMove");
        }
    });



    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });    
    

    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });


    //===== Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //===== Counter Up

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });


    //===== testimonial active

    $('.testimonial-active').slick({
        dots: true,
        speed: 800,
        arrows: false,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
            $('.wapp').fadeIn(300)
        } else {
            $('.back-to-top').fadeOut(200)
            $('.wapp').fadeOut(400)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //=====  WOW active

    new WOW().init();


    //=====  particles


    if (document.getElementById("particles-1")) particlesJS("particles-1", {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": !0,
                    "value_area": 4000
                }
            },
            "color": {
                "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
            },
            "shape": {
                "type": "image",
                "stroke": {
                    "width": 0,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "assets/images/logot_opacity_10.webp",
                    "width": 100,
                    "height": 100
                    
                }
            },
            "opacity": {
                "value": 0.15,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 0.2,
                    "opacity_min": 0.15,
                    "sync": !1
                }
            },
            "size": {
                "value": 50,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 2,
                    "size_min": 5,
                    "sync": !1
                }
            },
            "line_linked": {
                "enable": !1,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": !0,
                "speed": 1,
                "direction": "top",
                "random": !0,
                "straight": !1,
                "out_mode": "out",
                "bounce": !1,
                "attract": {
                    "enable": !1,
                    "rotateX": 0,
                    "rotateY": 0
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": !1,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": !1,
                    "mode": "repulse"
                },
                "resize": !0
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1,
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": !0
    });

    if (document.getElementById("particles-2")) particlesJS("particles-2", {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": !0,
                    "value_area": 4000
                }
            },
            "color": {
                "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
            },
            "shape": {
                "type": "image",
                "stroke": {
                    "width": 0,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "assets/images/logot_opacity_10.webp",
                    "width": 33,
                    "height": 33
                }
            },
            "opacity": {
                "value": 0.15,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 0.2,
                    "opacity_min": 0.15,
                    "sync": !1
                }
            },
            "size": {
                "value": 50,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 2,
                    "size_min": 5,
                    "sync": !1
                }
            },
            "line_linked": {
                "enable": !1,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": !0,
                "speed": 1,
                "direction": "top",
                "random": !0,
                "straight": !1,
                "out_mode": "out",
                "bounce": !1,
                "attract": {
                    "enable": !1,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": !1,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": !1,
                    "mode": "repulse"
                },
                "resize": !0
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1,
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": !0
    });


});



    var button = document.querySelectorAll('.pulse-btn');
    var scaleFactor = 1.02;
    var scaleDuration = 500; // Tempo em milissegundos

    function pulseButton() {
        button.forEach(element => {
            element.style.transition = 'transform ' + scaleDuration / 1000 + 's ease-in-out';
            element.style.transform = 'scale(' + scaleFactor + ')';
            
            setTimeout(function() {
                element.style.transform = 'scale(1)';
            }, scaleDuration);
        });
    }

    setInterval(pulseButton, scaleDuration * 2);


    $(document).ready(function() {
        
        $('.testimonial-carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 20000,
            dots: false, // Remover os pontos de navegação
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
   
    //accordion
    document.addEventListener("DOMContentLoaded", function() {
        var accordionItems = document.getElementsByClassName("accordion-item");
      
        for (var i = 0; i < accordionItems.length; i++) {
          var accordionHeader = accordionItems[i].querySelector(".accordion-header");
          accordionHeader.addEventListener("click", toggleAccordion);
        }
      
        function toggleAccordion(event) {
          var accordionItem = this.parentNode;
          accordionItem.classList.toggle("expanded");
        }
      });

      document.querySelector('.buton_pop').addEventListener('click', ()=>{
        document.querySelector('.popup').style.visibility = "hidden";
      })


     const serv =  document.querySelectorAll('.servv');
     serv.forEach(element => {
        element.addEventListener('mouseenter', (e)=>{
          element.querySelector('h3').textContent = element.dataset.descript;
          element.querySelector('h3').style.fontSize = '1vw'
          element.querySelector('.single-testimonial').style.height = 'auto';
          element.querySelector('.single-testimonial').style.transition = '1s'
        })

        element.addEventListener('mouseleave', (e)=>{
            element.querySelector('h3').textContent = element.dataset.origi;
            element.querySelector('.single-testimonial').style.height = '13vw'
            element.querySelector('h3').style.fontSize = '1.5vw'
          })
     });
        
        
            
            