import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react'

export const Gallery = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -7 * t))
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.img',
        scrub: true
      }
    });

    tl.to('.img', {
      stagger: 0.1,
      y: -700
    });
  }, []);

    return (
      <div className="portfolio__container" id='gallery'>
        <section className="gallery__header">
          {/* <div><span className="line_space">Les presento</span></div>
          <div><span className="line_space">mi mejor selección</span></div>
          <div><span className="line_space">de mi portfolio.</span></div> */}
        </section>
  
        <section className="section__gallery">
          {[...Array(9)].map((_, index) => (
            <div className="img" key={index}></div>
          ))}
        </section>
        
        <section className="gallery__footer"></section>
      </div>
    );
}
