// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    const animasiKeKanan = document.querySelectorAll(".animasiKeKanan");
    const animasiKeKiri = document.querySelectorAll(".animasiKeKiri");
    const animasiKeAtas = document.querySelectorAll(".animasiKeAtas");
    // gsap code here!
    animasiKeKanan.forEach((obj) => {
      gsap.from(obj, {
        scrollTrigger: {
          trigger: obj,
          start: "top center", // Animation starts when top of element hits 80% of viewport
          end: "bottom bottom",
          toggleActions: "restart none none reverse",
        },
        x: -50,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });
    });

    animasiKeKiri.forEach((obj) => {
      gsap.from(obj, {
        scrollTrigger: {
          trigger: obj,
          start: "top center", // Animation starts when top of element hits 80% of viewport
          end: "bottom bottom",
          toggleActions: "restart none none reverse",
        },
        x: 50,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });
    });

    animasiKeAtas.forEach((obj) => {
      gsap.from(obj, {
        scrollTrigger: {
          trigger: obj,
          start: "top center", // Animation starts when top of element hits 80% of viewport
          end: "bottom bottom",
          toggleActions: "restart none none reverse",
        },
        y: 50,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });
    });

    gsap.from(".animasiKeKiriCard", {
      scrollTrigger: {
        trigger: ".animasiKeKiriCard",
        start: "top center", // Animation starts when top of element hits 80% of viewport
        end: "bottom bottom",
        toggleActions: "restart none none reverse",
      },
      x: 50,
      opacity: 0,
      ease: "power2.out",
      duration: 1,
      stagger: 0.2,
    });
    gsap.from(".animasiKeKiriCard2", {
      scrollTrigger: {
        trigger: ".animasiKeKiriCard2",
        start: "top center", // Animation starts when top of element hits 80% of viewport
        end: "bottom bottom",
        toggleActions: "restart none none reverse",
      },
      x: 50,
      opacity: 0,
      ease: "power2.out",
      duration: 1,
      stagger: 0.2,
    });
    gsap.from(".animasiKeKiriCard3", {
      scrollTrigger: {
        trigger: ".animasiKeKiriCard3",
        start: "top center", // Animation starts when top of element hits 80% of viewport
        end: "bottom bottom",
        toggleActions: "restart none none reverse",
      },
      x: 50,
      opacity: 0,
      ease: "power2.out",
      duration: 1,
      stagger: 0.2,
    });
    gsap.from(".animasiOpacity", {
      scrollTrigger: {
        trigger: ".animasiOpacity",
        start: "top center", // Animation starts when top of element hits 80% of viewport
        end: "bottom bottom",
        toggleActions: "restart none none reverse",
      },
      opacity: 0,
      ease: "power2.out",
      duration: 1,
      stagger: 0.1,
    });
  });