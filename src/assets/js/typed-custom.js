let defaultOptions = {
  typeSpeed: 40,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
};

let firstTypedOptions = {
  stringsElement: "#first-typed-text",
  loop: false,
  loopCount: false,
  onComplete: function (self) {

    setTimeout(() => {
      $(".hero-section .first-typed-container .typed-cursor").css({'visibility': 'hidden'});

      setTimeout(() => {
        $(".hero-section .first-typed-container").animate({top: '-100px'}, 100);
      }, 500)

      setTimeout(() => {
        new Typed("#second-typed", Object.assign(defaultOptions, secondTypedOptions));
      }, 2500)
    }, 500)
  },
};

new Typed("#first-typed", Object.assign(defaultOptions, firstTypedOptions));

let secondTypedOptions = {
  stringsElement: "#second-typed-text",
  loop: false,
  onComplete: function () {

    setTimeout(() => {
      // $(".hero-section .second-typed-container .typed-cursor").hide();
      $(".hero-section .second-typed-container .typed-cursor").css({'visibility': 'hidden'});

      setTimeout(() => {
        $(".hero-section .first-typed-container").animate({top: '-200px'}, 100);
        $(".hero-section .second-typed-container").animate({top: '-100px'}, 100);
      }, 500)


      setTimeout(() => {
        new Typed("#third-typed", Object.assign(defaultOptions, thirdTypedOptions));
      }, 2500)
    }, 500)
  },
};


let thirdTypedOptions = {
  stringsElement: "#third-typed-text",
  backDelay: 2000,
  loop: true,
};
