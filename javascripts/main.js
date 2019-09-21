$(function(){
  InitHtmlInclude();

  var mainObj = $('main');

  if (mainObj.hasClass('home')) {
    $(window).on('resize load', () => {
      SwiperBrands();
      SwiperLogo();
      SwiperTestimonials();
    })
  } else if(mainObj.hasClass('filter')) {
    OpenSelect();
    SelectOption();
    RemoveSelectedChoices();
    OpenFilter();
    CloseFilter();

    if(mainObj.hasClass('products-modal')) {
      OnLoadShowModal();
    }
  } else if(mainObj.hasClass('about')) {
    MessageFixed();
    $(window).on('resize load', () => {
      OnLoadScroll();
      OnLoadAnimation();
      SwiperTestimonials();
      SwiperPartners();

      if ($(window).width() < '768') {
        toggleValuesButton();
        toggleVisionButton();
        toggleMissionButton();
      }
    })
  } else if(mainObj.hasClass('careers')) {
    FileUpload();
  }
});

function InitHtmlInclude() {
  w3.includeHTML();

  toggleNavbar();
  dropdownToggle();
  HeaderFixed();
  dropdownMobile();
}

//Start Header
const HeaderFixed = () => {
  const body = $('body');

  $(window).on('scroll', () => {
    if ($(window).scrollTop() == 0) {
      body.removeClass('header-fixed');
    } else {
      body.addClass('header-fixed');
      console.log(1)
    }
  })
}

const toggleNavbar = () => {
  setTimeout(() => {
    const navbarToggle = $('.navbar-toggler');
    const btnCloseMenu = $('.js-close-menu');

    navbarToggle.on('click', () => {
      togglehtmlClass();
    })

    btnCloseMenu.on('click', () => {
      closeMenu();
    })

    const togglehtmlClass = () => {
      const html = $('html');
      const body = $('body');

      html.toggleClass('overflow-hide');
      body.toggleClass('overflow-hide');
    }

    const closeMenu = () => {
      navbarToggle.click();
    }
  }, 200);
}

const dropdownToggle = () => {
  setTimeout(() => {
    const dropdown = $('.dropdown-toggle');
    const btnclose = $('.js-close-dropdown');

    dropdown.on('click', () => {
      toggleClass();
    })

    btnclose.on('click', () => {
      toggleClass()
    })

    $(document).on('click', '.black-overlay', () => {
      toggleClass()
    })

    const toggleClass = () => {
      const navbarCollapse = $('.navbar-collapse');

      navbarCollapse.toggleClass('black-overlay lock');
    }
  }, 200);
}

const dropdownMobile = () => {
  let windowWidth = $(window).width();
  const dropdown = $('.dropdown');
  const navbarCollapse = $('.navbar-collapse');


  $(window).on('load resize', () => {
    if (windowWidth <= 991) {
      if (dropdown.hasClass('show')) {
        console.log(1)
        navbarCollapse.addClass('collapse show');
      }
    }
  })
}
//End Header

//Start Home
const SwiperBrands = () => {
  var swiper = new Swiper('.swiper-container.swiper-brands', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    allowSlidePrev: false,
    allowSlideNext: false,
    noSwiping: true,

    breakpoints: {
      991: {
        slidesPerView: 3,
        allowSlidePrev: true,
        allowSlideNext: true,
        noSwiping: false,
        touchRatio: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      767: {
        slidesPerView: 2,
        allowSlidePrev: true,
        allowSlideNext: true,
        noSwiping: false,
        touchRatio: 1,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      575: {
        slidesPerView: 'auto',
        allowSlidePrev: true,
        allowSlideNext: true,
        noSwiping: false,
        touchRatio: 1,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      }
    }
  });
}

const SwiperLogo = () => {
  var swiper = new Swiper('.swiper-container.swiper-logos', {
    slidesPerView: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
    }
  });
}

const SwiperPartners = () => {
  var swiper = new Swiper('.swiper-container.partners-swiper', {
    slidesPerView: 6,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3,
      },
      375: {
        slidesPerView: 3,
        spaceBetween: 5,
      }
    }
  });
}

const SwiperTestimonials = () => {
  var swiper = new Swiper('.section-testimonials .swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.section-testimonials .swiper-button-next',
      prevEl: '.section-testimonials .swiper-button-prev',
    },
    breakpoints: {
      575: {
        autoHeight: true,
      },
    },
  });
}
//End Home

//Start Custom Select
const OpenSelect = () => {
  const filterTitle = $('.js-custom-select');

  filterTitle.on('click', (e) => {
    $(e.currentTarget).parent().toggleClass('filter-open');
    $(e.currentTarget).siblings().toggleClass('select-open');
    $(e.currentTarget).parent().siblings().removeClass('filter-open filter-active');
    $(e.currentTarget).parent().siblings().find('.select-custom ').removeClass('select-open');
  });

  OutsideCloseFilter();
}

const SelectOption = () => {
  const selectOption = $('.js-select-option');

  selectOption.on('click', (e) => {
    $(e.currentTarget).addClass('selected-choice');
  });
}

const RemoveSelectedChoices = () => {
  $(window).on('click', (e) => {
    if(e.target.classList[0] === "js-select-close") {
      $(e.target).parent().removeClass('selected-choice select-active');
    }
  })
}

const OutsideCloseFilter = () => {
  const filterTitle = $('.filter-title');
  const filterList = $('.filter-list');
  const selectCustom = $('.select-custom');
  let istrue = false;

  $(window).on('click', e => {

    if (e.target.classList.value != "filter-title js-custom-select" &&
    e.target.classList.value != "fas fa-angle-down icon-angle-down" &&
    e.target.classList.value != 'select-option' &&
    e.target.classList.value != 'select-list js-select-option selected-choice' &&
    e.target.classList.value != 'js-select-close fas fa-times-circle icon-close' &&
    e.target.localName != 'svg' &&
    e.target.localName != 'path' &&
    e.target.localName != 'polygon') {
      filterList.removeClass('filter-open');
      selectCustom.removeClass('select-open');
    }
  })
}
//End Custom Select

//Start Filter Function
const OpenFilter = () => {
  const body = $('body');
  const btnFilter = $('.js-filter');
  const filterWrapper = $('.filter-wrapper');

  btnFilter.on('click', () => {
    body.addClass('lock');
    filterWrapper.addClass('filter-wrapper-open');
  })
}

const CloseFilter = () => {
  const body = $('body');
  const btnCloseFilter = $('.js-close-filter');
  const filterWrapper = $('.filter-wrapper');

  btnCloseFilter.on('click', () => {
    body.removeClass('lock');
    filterWrapper.removeClass('filter-wrapper-open');
  })
}
//End Filter Function

//Start Modal
const OnLoadShowModal = () => {
  $('#nutriFacts').modal('show')
}
//End Modal

//Start About Function
const OnLoadScroll = () => {
  var myTab = $("#myTab");
  myTab.animate({scrollTop:myTab.height()}, 'slow');
}

const OnLoadAnimation = () => {
  var landingOne = $('.landing-one');
  var landingTwo = $('.landing-two');
  var landingThree = $('.landing-three');
  var landingFour = $('.landing-four');


  setTimeout( () => {
    landingOne.addClass('remove');
    landingTwo.addClass('unremove');
  }, 500);

  setTimeout( () => {
    landingTwo.removeClass('unremove');
    landingThree.addClass('unremove');
  }, 700);

  setTimeout( () => {
    landingThree.removeClass('unremove');
    landingFour.addClass('unremove');
  }, 900);
}

const toggleValuesButton = () => {
  setTimeout(() => {
    const valuesButtonToggle = $('#valuesButton');
    const valuesGoalTitleHolder = $('#valuesGoal .goal-title-holder');
    const valuesShowMessage = $('#valuesShowMessage');
    const btnCloseMessage = $('.js-close-message');

    valuesButtonToggle.on('click', () => {
      const body = $('body');
      body.addClass('overflow-hide');
      valuesButtonToggle.addClass('hide-goal');
      valuesShowMessage.addClass('show-message');
    })

    btnCloseMessage.on('click', () => {
      closeMessage();
    })

    const closeMessage = () => {
      btnCloseMessage.on('click', () => {
        const body = $('body');
        body.removeClass('overflow-hide');
        valuesGoalTitleHolder.removeClass('hide-goal');
        valuesShowMessage.removeClass('show-message');
      })
    }
  }, 200);
}

const toggleVisionButton = () => {
  setTimeout(() => {
    const visionButtonToggle = $('#visionButton');
    const visionGoalTitleHolder = $('#visionGoal .goal-title-holder');
    const visionShowMessage = $('#visionShowMessage');
    const btnCloseMessage = $('.js-close-message');

    visionButtonToggle.on('click', () => {
      const body = $('body');
      body.addClass('overflow-hide');
      visionButtonToggle.addClass('hide-goal');
      visionShowMessage.addClass('show-message');
    })

    btnCloseMessage.on('click', () => {
      closeMessage();
    })

    const closeMessage = () => {
      btnCloseMessage.on('click', () => {
        const body = $('body');
        body.removeClass('overflow-hide');
        visionGoalTitleHolder.removeClass('hide-goal');
        visionShowMessage.removeClass('show-message');
      })
    }
  }, 200);
}

const toggleMissionButton = () => {
  setTimeout(() => {
    const missionButtonToggle = $('#missionButton');
    const missionGoalTitleHolder = $('#missionGoal .goal-title-holder');
    const missionShowMessage = $('#missionShowMessage');
    const btnCloseMessage = $('.js-close-message');

    missionButtonToggle.on('click', () => {
      const body = $('body');
      body.addClass('overflow-hide');
      missionButtonToggle.addClass('hide-goal');
      missionShowMessage.addClass('show-message');
    })

    btnCloseMessage.on('click', () => {
      closeMessage();
    })

    const closeMessage = () => {
      btnCloseMessage.on('click', () => {
        const body = $('body');
        body.removeClass('overflow-hide');
        missionGoalTitleHolder.removeClass('hide-goal');
        missionShowMessage.removeClass('show-message');
      })
    }
  }, 200);
}

const FileUpload = () => {
  const fileBtn = document.getElementById("file");
  const realbtn = document.getElementById("file-button");
  const textfile = document.getElementById("file-name");

  realbtn.addEventListener("click", function() {
    fileBtn.click();
  });

  fileBtn.addEventListener("change", function() {
    if (fileBtn.value) {
      textfile.innerHTML = fileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }
    else {
      textfile.innerHTML = "No file chosen, yet.";
    }
  });
}

const MessageFixed = () => {
  const sectionGoal = $('.section-goal');

  $(window).on('scroll', () => {
    if ($(window).scrollTop() == 0) {
      sectionGoal.removeClass('message-fixed');
    } else {
      sectionGoal.addClass('message-fixed');
    }
  })
}
//End About Function
