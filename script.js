// ==========================
// LENIS
// ==========================

gsap.registerPlugin(ScrollTrigger)


// ==========================
// HERO INTRO
// ==========================

gsap.from(".hero-cherries",{

    y:-40,

    opacity:0,

    duration:1.2,

    ease:"power3.out"

})

gsap.from(".hero-title",{

    y:80,

    opacity:0,

    duration:1.3,

    delay:.2,

    ease:"power3.out"

})

gsap.from(".hero-description",{

    y:30,

    opacity:0,

    duration:1,

    delay:.45

})

gsap.from(".hero-cta",{

    y:20,

    opacity:0,

    duration:.8,

    delay:.7

})


// ==========================
// FLOATING
// ==========================

gsap.to(".hero-cherries",{

    y:-12,

    duration:2,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

})

gsap.to(".flower-decoration",{

    rotation:6,

    duration:7,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

})

gsap.to(".sun-decoration",{

    rotation:360,

    duration:40,

    repeat:-1,

    ease:"none"

})

gsap.to(".palm-decoration",{

    y:-18,

    duration:3,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

})


// ==========================
// REVEAL
// ==========================

// ==========================
// NUMBERS ANIMATION
// ==========================

gsap.utils.toArray(".number-panel").forEach((panel) => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    tl.from(panel.querySelector(".number-value"), {
        scale: 0.2,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(2.2)"
    })

    .from(panel.querySelector("h2"), {
        y: 80,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    }, "-=0.45")

    .from(panel.querySelector("p"), {
        y: 25,
        opacity: 0,
        duration: 0.5
    }, "-=0.35");

});

// ==========================
// NAVBAR
// ==========================

ScrollTrigger.create({

    start:100,

    onUpdate:self=>{

        if(self.direction===1){

            gsap.to(".navbar",{

                background:"rgba(248,242,235,.72)",

                backdropFilter:"blur(18px)",

                duration:.3

            })

        }else{

            gsap.to(".navbar",{

                background:"transparent",

                backdropFilter:"blur(0px)",

                duration:.3

            })

        }

    }

})

// ======================================
// HERO PARALLAX
// ======================================

gsap.to(".hero-wrapper",{

    y:-180,

    scale:.88,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:true

    }

})

gsap.to(".background",{

    y:-120,

    ease:"none",

    scrollTrigger:{

        trigger:"body",

        start:"top top",

        end:"bottom bottom",

        scrub:1

    }

})

// ======================================
// HOW IT WORKS
// ======================================

gsap.utils.toArray(".step").forEach((step)=>{

    gsap.from(step.querySelector(".step-number"),{

        scale:.3,

        opacity:0,

        duration:.9,

        ease:"back.out(2)",

        scrollTrigger:{

            trigger:step,

            start:"top 75%"

        }

    });

    gsap.from(step.querySelector("h3"),{

        y:60,

        opacity:0,

        duration:.7,

        delay:.15,

        ease:"power3.out",

        scrollTrigger:{

            trigger:step,

            start:"top 75%"

        }

    });

    gsap.from(step.querySelector("p"),{

        y:30,

        opacity:0,

        duration:.7,

        delay:.3,

        ease:"power2.out",

        scrollTrigger:{

            trigger:step,

            start:"top 75%"

        }

    });

});

// ======================================
// STEP 01
// ======================================

gsap.from(".step-big-number",{

    scale:.4,

    opacity:0,

    duration:1,

    ease:"expo.out",

    scrollTrigger:{

        trigger:".step-scene",

        start:"top 65%"

    }

})

gsap.from(".step-title",{

    y:70,

    opacity:0,

    duration:.8,

    delay:.15,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".step-scene",

        start:"top 65%"

    }

})

gsap.from(".step-copy",{

    y:35,

    opacity:0,

    duration:.8,

    delay:.3,

    ease:"power2.out",

    scrollTrigger:{

        trigger:".step-scene",

        start:"top 65%"

    }

})

gsap.from(".step-flower",{

    x:-120,

    rotation:-18,

    opacity:0,

    duration:1.3,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".step-scene",

        start:"top 70%"

    }

})

// ======================================
// STEP DECORATIONS
// ======================================

gsap.from(".step-sun",{

    rotation:-25,

    scale:.7,

    opacity:0,

    duration:1.2,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".step-sun",

        start:"top 75%"

    }

})

gsap.from(".step-cherries",{

    y:-60,

    rotation:18,

    opacity:0,

    duration:1,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".step-cherries",

        start:"top 75%"

    }

})

gsap.to(".step-cherries",{

    y:-12,

    duration:2,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

})

// ======================================
// THE FINALE
// ======================================

gsap.from(".prize-title",{

    scale:.55,

    opacity:0,

    duration:1,

    ease:"expo.out",

    scrollTrigger:{

        trigger:".prize",

        start:"top 70%"

    }

})

gsap.from(".prize-subtitle",{

    y:60,

    opacity:0,

    duration:.8,

    delay:.2,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".prize",

        start:"top 70%"

    }

})

gsap.from(".prize-copy",{

    y:30,

    opacity:0,

    duration:.8,

    delay:.35,

    scrollTrigger:{

        trigger:".prize",

        start:"top 70%"

    }

})

gsap.to(".prize-cherries",{

    y:-12,

    duration:2,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

})

// ======================================
// THE FINALE
// ======================================

gsap.from(".prize-title",{

    scale:.55,
    opacity:0,
    duration:1,
    ease:"expo.out",

    scrollTrigger:{
        trigger:".prize",
        start:"top 70%"
    }

})

gsap.from(".prize-subtitle",{

    y:60,
    opacity:0,
    duration:.8,

    scrollTrigger:{
        trigger:".prize",
        start:"top 70%"
    }

})

gsap.from(".prize-copy",{

    y:30,
    opacity:0,
    duration:.8,

    scrollTrigger:{
        trigger:".prize",
        start:"top 70%"
    }
gsap.from(".prize-ticket",{

    y:-80,
    rotation:-12,
    opacity:0,
    duration:1.2,
    ease:"expo.out",

    scrollTrigger:{
        trigger:".prize",
        start:"top 70%"
    }

})
})
