import $ from 'jquery';
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import {TweenMax, TimelineMax} from "gsap"; // Also works with TweenLite and TimelineLite
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax);

export const setupScrollMagic = () => {
    // init controller
    var controller = new ScrollMagic.Controller();
    // var tween = TweenMax.to("#target", 1, {rotation: 360, ease: Linear.easeNone});

    //items animations
    var revealElements = document.getElementsByClassName("anim-digit");

    for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], // value not modified, so we can use element as trigger as well
            offset: 50,						   // start a little later
            triggerHook: 0.9,
        })
            .setClassToggle(revealElements[i], "visible") // add class toggle
            .addTo(controller);
    }

// top section
    // menu fix
    let topSectionHeight = $(document).height();
    new ScrollMagic.Scene({
        triggerElement: "#top-section-header",
        triggerHook: 0,
        duration: topSectionHeight,
        offset: 0
    })
        .setPin("#top-section-header")
        .addTo(controller);

    //menu logo color
    var menuLogo = new TimelineMax()
        .from("#top-section-header .main-logo__img.black", 1, {opacity: 0})
        .to("#top-section-header .main-logo__img.black", 1, {opacity: 1});
    new ScrollMagic.Scene({
        triggerElement: "#top-section-header",
        triggerHook: 0,
        duration: "20%",
        offset: 0
    })
        .setTween(menuLogo)
        .addTo(controller);

    //menu item color
    var menuItem = new TimelineMax()
        .from([".main-menu__item", " .languages__item"], 1, {color: '#fff'})
        .to([" .main-menu__item", ".languages__item"], 1, {color: '#20222B'});
    new ScrollMagic.Scene({
        triggerElement: "#top-section-header",
        triggerHook: 0,
        duration: "20%",
        offset: 0
    })
        .setTween(menuItem)
        .addTo(controller);

    //video overlay
    var topSectionVideoOverlay = new TimelineMax()
        .from(".video-overlay", 1, {opacity: 0})
        .to(".video-overlay", 1, {opacity: 1});
    new ScrollMagic.Scene({
        triggerElement: ".video-overlay",
        triggerHook: 0,
        duration: "100%", // use full viewport
        offset: 0
    })
        .setTween(topSectionVideoOverlay)
        .addTo(controller);

//about image parralax
    var aboutImageParralax = new TimelineMax()
        .from([".about-img"], 1, {transform: 'translateY(0)'})
        .to([".about-img"], 1, {transform: 'translateY(-5%)'});
    new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: 0.5,
        duration: "60%", // use full viewport
        offset: 0
    })
        .setTween(aboutImageParralax)
        .addTo(controller);

// clients
    // menu logo color
    new ScrollMagic.Scene({
        triggerElement: "#clients",
        triggerHook: 0.1,
        duration: "20%",
        offset: 0
    })
        .setClassToggle(".main-logo__img.black", "hidden")
        .addTo(controller);
    // lang item color
    new ScrollMagic.Scene({
        triggerElement: "#clients",
        triggerHook: 0.1,
        duration: "20%",
        offset: 0
    })
        .setClassToggle(".languages__item", "white")
        .addTo(controller);
    // menu item color
    new ScrollMagic.Scene({
        triggerElement: "#clients",
        triggerHook: 0.9,
        duration: "100%",
        offset: 0
    })
        .setClassToggle(".main-menu__item", "white")
        .addTo(controller);

    //client content fix
    var clientsSectionFix = new TimelineMax()
        .from(["#clients-section-bg"], 1, {transform: 'scale(1.1)', opacity: 1, ease: Linear.easeNone})
        .to(["#clients-section-bg"], 1, {transform: 'scale(1)', opacity: 0, ease: Linear.easeNone});
    new ScrollMagic.Scene({
        triggerElement: "#clients-section-bg",
        triggerHook: 0,
        duration: "20%", // use full viewport
        offset: 0
    })
        .setTween(clientsSectionFix)
        .setPin("#clients-section-bg")
        .addTo(controller);

 //clients letter parralax
    var letterElementsParralax1 = new TimelineMax()
        .from('.client-item__letter_1', 1, {transform: 'translateY(0)'})
        .to('.client-item__letter_1', 1, {transform: 'translateY(-20%)'});
    new ScrollMagic.Scene({
        triggerElement: '.client-item__letter_1',
        triggerHook: 1,
        duration: "100%",
        offset: 0
    })
        .setTween(letterElementsParralax1)
        .addTo(controller);

    var letterElementsParralax2 = new TimelineMax()
        .from('.client-item__letter_2', 1, {transform: 'translateY(0)'})
        .to('.client-item__letter_2', 1, {transform: 'translateY(-20%)'});
    new ScrollMagic.Scene({
        triggerElement: '.client-item__letter_2',
        triggerHook: 1,
        duration: "100%",
        offset: 0
    })
        .setTween(letterElementsParralax2)
        .addTo(controller);

    var letterElementsParralax3 = new TimelineMax()
        .from('.client-item__letter_3', 1, {transform: 'translateY(0)'})
        .to('.client-item__letter_3', 1, {transform: 'translateY(-20%)'});
    new ScrollMagic.Scene({
        triggerElement: '.client-item__letter_3',
        triggerHook: 1,
        duration: "100%",
        offset: 0
    })
        .setTween(letterElementsParralax3)
        .addTo(controller);

    var letterElementsParralax4 = new TimelineMax()
        .from('.client-item__letter_4', 1, {transform: 'translateY(0)'})
        .to('.client-item__letter_4', 1, {transform: 'translateY(-20%)'});
    new ScrollMagic.Scene({
        triggerElement: '.client-item__letter_4',
        triggerHook: 1,
        duration: "100%",
        offset: 0
    })
        .setTween(letterElementsParralax4)
        .addTo(controller);


// team
    // menu logo color
    new ScrollMagic.Scene({
        triggerElement: "#team",
        triggerHook: 0.1,
        duration: "100%",
        offset: 0
    })
        .setClassToggle(".main-logo__img.black", "hidden")
        .addTo(controller);
    // lang item color
    new ScrollMagic.Scene({
        triggerElement: "#team",
        triggerHook: 0.1,
        duration: "100%",
        offset: 0
    })
        .setClassToggle(".languages__item", "white")
        .addTo(controller);
    // menu item color
    new ScrollMagic.Scene({
        triggerElement: "#team",
        triggerHook: 0.9,
        duration: "100%",
        offset: 0
    })
        .setClassToggle(".main-menu__item", "white")
        .addTo(controller);

    //team content fix
    var teamSectionFix = new TimelineMax()
        .from(["#team-section-bg"], 1, {transform: 'scale(1.1)', opacity: 1, ease: Linear.easeNone})
        .to(["#team-section-bg"], 1, {transform: 'scale(1)', opacity: 0, ease: Linear.easeNone});
    new ScrollMagic.Scene({
        triggerElement: "#team-section-bg",
        triggerHook: 0,
        duration: "100%", // use full viewport
        offset: 0
    })
        .setTween(teamSectionFix)
        // .setPin("#team-section-bg")
        .addTo(controller);

  //team letter parralax
    var teamLetterElementsParralax1 = new TimelineMax()
        .from('.team-item__letter_1', 1, {transform: 'translateY(0)'})
        .to('.team-item__letter_1', 1, {transform: 'translateY(-20%)'});
    new ScrollMagic.Scene({
        triggerElement: '.team-item__letter_1',
        triggerHook: 1,
        duration: "100%",
        offset: 0
    })
        .setTween(teamLetterElementsParralax1)
        .addTo(controller);

    var teamLetterElementsParralax2 = new TimelineMax()
        .from('.team-item__letter_2', 1, {transform: 'translateY(0)'})
        .to('.team-item__letter_2', 1, {transform: 'translateY(-20%)'});
    new ScrollMagic.Scene({
        triggerElement: '.team-item__letter_2',
        triggerHook: 1,
        duration: "100%",
        offset: 0
    })
        .setTween(teamLetterElementsParralax2)
        .addTo(controller);

// values
  // values number parralax
    var valuesNumberElementsParralax1 = new TimelineMax()
        .from('.values-item__number_1 img', 1, {transform: 'translateY(0)'})
        .to('.values-item__number_1 img', 1, {transform: 'translateY(-20%)'});
    new ScrollMagic.Scene({
        triggerElement: '.values-item__number_1',
        triggerHook: 1,
        duration: "100%",
        offset: 0
    })
        .setTween(valuesNumberElementsParralax1)
        .addTo(controller);

    var valuesNumberElementsParralax2 = new TimelineMax()
        .from('.values-item__number_2 img', 1, {transform: 'translateY(0)'})
        .to('.values-item__number_2 img', 1, {transform: 'translateY(-20%)'});
    new ScrollMagic.Scene({
        triggerElement: '.values-item__number_2 img',
        triggerHook: 1,
        duration: "100%",
        offset: 0
    })
        .setTween(valuesNumberElementsParralax2)
        .addTo(controller);

    var valuesNumberElementsParralax3 = new TimelineMax()
        .from('.values-item__number_3 img', 1, {transform: 'translateY(0)'})
        .to('.values-item__number_3 img', 1, {transform: 'translateY(-20%)'});
    new ScrollMagic.Scene({
        triggerElement: '.values-item__number_3 img',
        triggerHook: 1,
        duration: "100%",
        offset: 0
    })
        .setTween(valuesNumberElementsParralax3)
        .addTo(controller);

};
