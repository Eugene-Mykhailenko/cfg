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

    const screenWidth = $(window).width();
    const mobileWidth = 767 >= screenWidth;
    const tabletWidth = 1024 >= screenWidth;
    const desctopWidth = 1024 < screenWidth;

// top section

    // menu logo color
    new ScrollMagic.Scene({
        triggerElement: ".top-section",
        triggerHook: 0,
        duration: "20%",
        offset: 0
    }).setClassToggle(".main-logo__img.black", "hidden").addTo(controller);

    // lang item color
    new ScrollMagic.Scene({
        triggerElement: ".top-section",
        triggerHook: 0,
        duration: "20%",
        offset: 0
    }).setClassToggle(".languages__item", "white").addTo(controller);

    // burger color
    new ScrollMagic.Scene({
        triggerElement: ".top-section",
        triggerHook: 0,
        duration: "20%",
        offset: 0
    }).setClassToggle(".main-header-burger", "white").addTo(controller);

    if(desctopWidth) {
        // menu item color
        new ScrollMagic.Scene({
            triggerElement: ".top-section",
            triggerHook: 0,
            duration: "20%",
            offset: 0
        }).setClassToggle(".main-menu__item", "white").addTo(controller);
    }

    //video overlay
    var topSectionVideoOverlay = new TimelineMax()
        .from(".video-overlay", 1, {opacity: 0})
        .to(".video-overlay", 1, {opacity: 1});
    new ScrollMagic.Scene({
        triggerElement: ".video-overlay",
        triggerHook: 0,
        duration: "100%", // use full viewport
        offset: 0
    }).setTween(topSectionVideoOverlay).addTo(controller);

//about image parralax
//     var aboutImageParralax = new TimelineMax()
//         .from([".about-img"], 1, {transform: 'translateY(0)', ease: Ease.Ease})
//         .to([".about-img"], 1, {transform: 'translateY(-5%)', ease: Ease.Ease});
//     new ScrollMagic.Scene({
//         triggerElement: "#about",
//         triggerHook: 0.9,
//         duration: "100%", // use full viewport
//         offset: 0
//     }).setTween(aboutImageParralax).addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#about",duration: "100%", ease: Ease.Ease})
        .setTween(".about-img", {y: "10%", ease: Linear.easeNone})
        .addTo(controller);

// clients
    // menu logo color
    new ScrollMagic.Scene({
        triggerElement: "#clients",
        triggerHook: 0.1,
        duration: "50%",
        offset: 0
    }).setClassToggle(".main-logo__img.black", "hidden").addTo(controller);

    // lang item color
    new ScrollMagic.Scene({
        triggerElement: "#clients",
        triggerHook: 0.1,
        duration: "50%",
        offset: 0
    }).setClassToggle(".languages__item", "white").addTo(controller);

    // burger color
    new ScrollMagic.Scene({
        triggerElement: "#clients",
        triggerHook: 0.1,
        duration: "50%",
        offset: 0
    }).setClassToggle(".main-header-burger", "white").addTo(controller);

    // menu item color
    new ScrollMagic.Scene({
        triggerElement: "#clients",
        triggerHook: 0.5,
        duration: "100%",
        offset: 0
    }).setClassToggle(".main-menu__item", "white").addTo(controller);

    //client content fix
    var clientsSectionFix = new TimelineMax()
        .from(["#clients-section-bg"], 1, {transform: 'scale(1.1)', ease: Ease.Ease})
        .to(["#clients-section-bg"], 1, {transform: 'scale(1)', ease: Ease.Ease});
    new ScrollMagic.Scene({
        triggerElement: "#clients-section-bg",
        triggerHook: 0,
        duration: "100%", // use full viewport
        offset: 0
    }).setTween(clientsSectionFix).setPin("#clients-section-bg").addTo(controller);

    var clientsSectionFix2 = new TimelineMax()
        .from(["#clients-section-bg", "#clients .section-content-title"], 1, { opacity: 1, ease: Ease.Ease})
        .to(["#clients-section-bg", "#clients .section-content-title"], 1, { opacity: 0, ease: Ease.Ease});
    new ScrollMagic.Scene({
        triggerElement: "#clients-section-bg",
        triggerHook: 0,
        duration: "50%",
        offset: 0
    }).setTween(clientsSectionFix2).addTo(controller);

 //clients letter parralax
    new ScrollMagic.Scene({triggerElement: ".client-item__letter_1",duration: "100%", ease: Ease.Ease})
        .setTween(".client-item__letter_1", {y: "25%", ease: Linear.easeNone})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".client-item__letter_2",duration: "100%", ease: Ease.Ease})
        .setTween(".client-item__letter_2", {y: "25%", ease: Linear.easeNone})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".client-item__letter_3",duration: "100%", ease: Ease.Ease})
        .setTween(".client-item__letter_3", {y: "25%", ease: Linear.easeNone})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".client-item__letter_4",duration: "100%", ease: Ease.Ease})
        .setTween(".client-item__letter_4", {y: "25%", ease: Linear.easeNone})
        .addTo(controller);

// team
    // menu logo color
    new ScrollMagic.Scene({
        triggerElement: "#team",
        triggerHook: 0.5,
        duration: "100%",
        offset: 0
    }).setClassToggle(".main-logo__img.black", "hidden").addTo(controller);

    // lang item color
    new ScrollMagic.Scene({
        triggerElement: "#team",
        triggerHook: 0.5,
        duration: "100%",
        offset: 0
    }).setClassToggle(".languages__item", "white").addTo(controller);

    // burger color
    new ScrollMagic.Scene({
        triggerElement: "#team",
        triggerHook: 0.5,
        duration: "100%",
        offset: 0
    }).setClassToggle(".main-header-burger", "white").addTo(controller);

    // menu item color
    new ScrollMagic.Scene({
        triggerElement: "#team",
        triggerHook: 0.9,
        duration: "100%",
        offset: 0
    }).setClassToggle(".main-menu__item", "white").addTo(controller);

    // if(desctopWidth) {
        if(desctopWidth) {
            //team content fix
            let teamSectionFix = new TimelineMax()
                .from(["#team-section-bg"], 1, {transform: 'scale(1.1)', ease: Ease.Ease})
                .to(["#team-section-bg"], 1, {transform: 'scale(1)', ease: Ease.Ease});
            new ScrollMagic.Scene({
                triggerElement: "#team-section-bg",
                triggerHook: 0,
                duration: "150%", // use full viewport
                offset: 0
            }).setTween(teamSectionFix).setPin("#team-section-bg").addTo(controller);

            let teamSectionFix2 = new TimelineMax()
                .from(["#team-section-bg", "#team .section-content-title"], 1, { opacity: 1, ease: Ease.Ease})
                .to(["#team-section-bg", "#team .section-content-title"], 1, { opacity: 0, ease: Ease.Ease});
            new ScrollMagic.Scene({
                triggerElement: "#team-section-bg",
                triggerHook: 0,
                duration: "80%",
                offset: 0
            }).setTween(teamSectionFix2).addTo(controller);
        }

    if(tabletWidth) {
        //team content fix
        let teamSectionFix = new TimelineMax()
            .from(["#team-section-bg"], 1, {transform: 'scale(1.1)', ease: Ease.Ease})
            .to(["#team-section-bg"], 1, {transform: 'scale(1)', ease: Ease.Ease});
        new ScrollMagic.Scene({
            triggerElement: "#team-section-bg",
            triggerHook: 0,
            duration: "100%", // use full viewport
            offset: 0
        }).setTween(teamSectionFix).setPin("#team-section-bg").addTo(controller);

        let teamSectionFix2 = new TimelineMax()
            .from(["#team-section-bg", "#team .section-content-title"], 1, { opacity: 1, ease: Ease.Ease})
            .to(["#team-section-bg", "#team .section-content-title"], 1, { opacity: 0, ease: Ease.Ease});
        new ScrollMagic.Scene({
            triggerElement: "#team-section-bg",
            triggerHook: 0,
            duration: "50%",
            offset: 0
        }).setTween(teamSectionFix2).addTo(controller);
    }

        if(mobileWidth) {
            //team content fix
            let teamSectionFix = new TimelineMax()
                .from(["#team-section-bg"], 1, {transform: 'scale(1.1)', ease: Ease.Ease})
                .to(["#team-section-bg"], 1, {transform: 'scale(1)', ease: Ease.Ease});
            new ScrollMagic.Scene({
                triggerElement: "#team-section-bg",
                triggerHook: 0,
                duration: "100%", // use full viewport
                offset: 0
            }).setTween(teamSectionFix).setPin("#team-section-bg").addTo(controller);

            let teamSectionFix2 = new TimelineMax()
                .from(["#team-section-bg", "#team .section-content-title"], 1, { opacity: 1, ease: Ease.Ease})
                .to(["#team-section-bg", "#team .section-content-title"], 1, { opacity: 0, ease: Ease.Ease});
            new ScrollMagic.Scene({
                triggerElement: "#team-section-bg",
                triggerHook: 0,
                duration: "50%",
                offset: 0
            }).setTween(teamSectionFix2).addTo(controller);
        }






  //team letters parralax
    new ScrollMagic.Scene({triggerElement: ".team-item__letter_1",duration: "100%", ease: Ease.Ease})
        .setTween(".team-item__letter_1", {y: "25%", ease: Linear.easeNone})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".team-item__letter_2",duration: "100%", ease: Ease.Ease})
        .setTween(".team-item__letter_2", {y: "25%", ease: Linear.easeNone})
        .addTo(controller);

// values
  // values number parralax
    new ScrollMagic.Scene({triggerElement: ".values-item__number_1 img",duration: "100%", ease: Ease.Ease})
        .setTween(".values-item__number_1 img", {y: "-25%", ease: Linear.easeNone})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".values-item__number_2 img",duration: "100%", ease: Ease.Ease})
        .setTween(".values-item__number_2 img", {y: "-25%", ease: Linear.easeNone})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".values-item__number_3 img",duration: "100%", ease: Ease.Ease})
        .setTween(".values-item__number_3 img", {y: "-25%", ease: Linear.easeNone})
        .addTo(controller);
};
