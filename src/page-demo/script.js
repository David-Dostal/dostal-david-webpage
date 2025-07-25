
export const portfolioSlick = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 420,
        settings: {
            slidesToShow: 1,
        }
    }
]
};

export const portfolioSlick2 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [{
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 993,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 769,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 481,
        settings: {
            slidesToShow: 1,
        }
    }
]
};

export const slickDot = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
        initialSlide: 0,         // ✅ important for proper behavior

    dots: true,
    arrows: false,
    
    responsive: [{
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 993,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 580,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 481,
        settings: {
            slidesToShow: 1,
        }
    }
    
]
};


export const slideSlick = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    fade: true,
    easing: "fade",
    adaptiveHeight: true
};

export const innerPageDemo = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 485,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
};

export const testimonialActivation = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            }
        },
        {
            breakpoint: 577,
            settings: {
            slidesToShow: 1,
            }
        },
        {
            breakpoint: 485,
            settings: {
            slidesToShow: 1,
            }
        }
    ]
};

