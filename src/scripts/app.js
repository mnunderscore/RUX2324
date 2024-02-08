"use strict";
import { gsap } from "gsap";

gsap.set("#slider-container", {perspective:1000});
gsap.set(".bigsquare", {transformStyle:"preserve-3d"});
gsap.set([".square-back-1, .square-back-2, .square-back-3, .square-back-4"], {zIndex:-1});
gsap.set([".square-back-1, .square-back-2, .square-back-3, .square-back-4", ".square"], {backfaceVisibility:"hidden"});

var action = gsap.timeline({paused:true, reversed:true}) // toggle this timeline
gsap.set('.top',{zIndex:0}); // see also line 27 in css ...
gsap.set('.topBack',{zIndex:2,backfaceVisibility:'visible'})

gsap.to('.top', { duration: 1, rotationX:-180, transformOrigin:"0% 100%", ease:"Power2.inOut",})
gsap.to('.bottom,.bottomBack', {duration: 1, rotationY:-180, transformOrigin:"0% 100%", ease:"Power2.inOut",}, "+=0.5")

document.querySelector('#slider-container > .bigsquare').addEventListener('click', function() {
    action.reversed() ? action.play() : action.reverse();
});
