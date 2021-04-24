var guides = [
    {
      name: 'Talia Goldberg',
      title: 'Partner; Bessemer Venture Partners',
      bio: 'Talia joined Bessemer in 2013 and has invested in 15+ early and growth stage software and internet startups. She was featured in Forbes 30 Under 30 for Venture Capital and recognized on Business Insider\'s Rising Stars list.',
      imageSource: 'img/speakers/talia_goldberg.png'
    },
    {
      name: 'Sarah Guo',
      title: 'General Partner at Greylock',
      bio: 'Sarah is a General Partner at Greylock, and is the firm’s youngest GP and first female GP. Prior to Greylock, she spent time at Goldman Sachs.',
      imageSource: 'img/speakers/talia_goldberg.png'
    },
  
    {
      name: 'Afton Vechery',
      title: 'CEO of Modern Fertility',
      bio: 'Afton is the cofounder and CEO of Modern Fertility, helping women everywhere get access to fertility information. Prior to this, she rebuilt 23AndMe’s consumer experience and worked in healthcare focused private equity.',
      imageSource: 'img/speakers/talia_goldberg.png'
    },
    {
      name: 'Rebecca Kaden',
      title: 'General Partner at Union Square Ventures',
      bio: 'Rebecca is the General Partner at Union Square Ventures, investing in companies using the internet to re-shape the market. Prior to Union Square Ventures, she was a General Partner at Maveron, a consumer-focused early stage fund.',
      imageSource: 'img/speakers/talia_goldberg.png'
    },
    {
      name: 'Fatima Dicko',
      title: 'CEO of Jetpack',
      bio: 'Fatima is the founder and CEO of Jetpack, bringing students the products they need in minutes. Jetpack is backed by Dorm Room Fund. Prior to Jetpack, Fatima was the youngest senior engineer in P&G’s upstream innovation division.',
      imageSource: 'img/speakers/talia_goldberg.png'
    }
  ];
  
  // Counters to store which testimonial and guide is currently visible.
  var state = {
    counters: {
      testimonial: 0,
      guide: 0
    }
  }
  
  var setGuide = function(guide) {
    document.getElementById("guide-bio").textContent = guide.bio;
    document.getElementById("guide-name").textContent = guide.name;
    document.getElementById("guide-title").textContent = guide.title;
    document.getElementById("guide-image").src = guide.imageSource;
  };
  
  var setButtonDisabledStatus = function(buttonSelector, disabled) {
    var button = document.querySelector(buttonSelector);
    if (!button) {
      debugger;
    }
    button.disabled = disabled;
  }
  
  var setButtonDisabledStatuses = function(carousel, current, limit) {
    var previousButtonSelector = '#previous-' + carousel;
    var nextButtonSelector = '#next-' + carousel;
  
    if (current == 0) {
      setButtonDisabledStatus(previousButtonSelector, true);
    } else if (current == limit) {
      setButtonDisabledStatus(nextButtonSelector, true);
    } else {
      setButtonDisabledStatus(previousButtonSelector, false);
      setButtonDisabledStatus(nextButtonSelector, false);
    }
  };
  
  var changeCarousel = function(carousel, delta, carouselOptions) {
    state.counters[carousel] = state.counters[carousel] + delta;
    var counter = state.counters[carousel];
    setButtonDisabledStatuses(carousel, counter, carouselOptions.length - 1)
    nextOption = carouselOptions[counter];
  
    if (carousel == 'testimonial') {
      setTestimonial(nextOption);
    } else if (carousel == 'guide') {
      setButtonDisabledStatuses('guide-small', counter, carouselOptions.length - 1);
      setGuide(nextOption);
    }
  }
  
  window.addEventListener('load',function() {
    // setTestimonial(testimonials[state.counters.testimonial]);
    setGuide(guides[state.counters.guide]);
    // setButtonDisabledStatuses("testimonial", state.counters.testimonial, testimonials.length - 1)
    setButtonDisabledStatuses("guide", state.counters.guide, guides.length - 1)
    setButtonDisabledStatuses("guide-small", state.counters.guide, guides.length - 1)
  
    // document.getElementById("next-testimonial").addEventListener("click", function() {
    //   changeCarousel('testimonial', 1, testimonials);
    // });
  
    // document.getElementById("previous-testimonial").addEventListener("click", function() {
    //   changeCarousel('testimonial', -1, testimonials);
    // });
  
    document.getElementById("next-guide").addEventListener("click", function() {
      changeCarousel('guide', 1, guides);
    });
  
    document.getElementById("previous-guide").addEventListener("click", function() {
      changeCarousel('guide', -1, guides);
    });
  
    document.getElementById("next-guide-small").addEventListener("click", function() {
      changeCarousel('guide', 1, guides);
    });
  
    document.getElementById("previous-guide-small").addEventListener("click", function() {
      changeCarousel('guide', -1, guides);
    });
  });
  