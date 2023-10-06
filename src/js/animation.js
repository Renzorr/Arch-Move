import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function createScrollTimeline(trigger, start, end) {
  return gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
    },
  });
}

let tl = gsap.timeline();

let tlRooms = createScrollTimeline(".room", "top center", "center center");

let tlFeatures = createScrollTimeline(
  ".features",
  "top center",
  "center center"
);

let tlTestimonial = createScrollTimeline(
  ".testimonial",
  "top center",
  "center center"
);

let tlContact = createScrollTimeline(".contact", "top center", "center center");

let tlPartners = createScrollTimeline(
  ".partners",
  "top center",
  "center center"
);

// HEADER

tl.from(".header", {
  opacity: 0,
  y: -50,
  delay: 3.2,
});

tl.to(
  "header .btn-primary",
  {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  "-=2"
);

// HERO

tl.from(
  "main .hide-title",
  {
    y: 120,
  },
  "-=0.3"
);

tl.from(
  "main .hide-paragraph",
  {
    y: 150,
  },
  "-=0.3"
);

tl.to(
  "main .btn-primary",
  {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    ease: "Expo.easeIn",
  },
  "-=0.6"
);

tl.to(
  "main .hero-img",
  {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    ease: "Expo.easeIn",
  },
  "+=0.1"
);

// ROOMS

tlRooms.from(".room .hide-title", {
  y: 100,
});

tlRooms.from(".room button", {
  scale: 0,
  stagger: 0.2,
});

tlRooms.from(".room .swiper-wrapper", {
  opacity: 0,
  x: 10000,
});

// FEATURES

tlFeatures.to(".features .features-img", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  ease: "Expo.easeIn",
});

tlFeatures.from(".features .hide-title", {
  y: -100,
});

tlFeatures.from(".features .item", {
  opacity: 0,
  x: -30,
  stagger: 0.3,
});

tlFeatures.to(
  ".features .btn-primary",
  {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    ease: "Expo.easeIn",
  },
  "-=0.1"
);

// TESTIMONIAL

tlTestimonial.from(".testimonial .hide-title", {
  y: -100,
});

tlTestimonial.from(".testimonial .swiper-wrapper", {
  opacity: 0,
  x: 10000,
});

// CONTACT

tlContact.from(".contact .contact-img", {
  opacity: 0,
  x: -50,
});

tlContact.from(".contact .hide-title", {
  y: -100,
});

tlContact.to(
  ".contact .btn-primary",
  {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    ease: "Expo.easeIn",
  },
  "-=0.1"
);

//Partners

tlPartners.from(".partners .hide-title", {
  y: -100,
});

tlPartners.from(".partners .partners-logo", {
  opacity: 0,
  stagger: 0.2,
});
