import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { gsap, ScrollTrigger  } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

export const Test = () => {
  useEffect(() => {
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((char, i) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      const text = new SplitType(char, { types: 'chars' });

      gsap.fromTo(
        text.chars,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse',
          },
        }
      );
    });

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
    };
  }, []); 

  return (
    <>
      <section className="text-recoleta section__test flex flex-col items-center justify-center h-[70vh] sm:h-[70vh] md:h-[70vh] lg:h-[100vh] pb-0 px-8 sm:pb-0 sm:px-2 ">
        <p className="reveal-type text-recoleta text-center text-2x1 md:text-3xl lg:text-4xl xl:text-5xl mx-0 sm:mx-2 px-5 sm:px-32 tracking-normal" data-bg-color="#cfcee1" data-fg-color="#4f46e5">
        Mi pasión se enfoca en crear sitios con una excelente usabilidad, contenido <br /> para RR.SS, ilustraciones e interfaces <br /> que te dejarían así 🢡 ☺ 🢠.
        </p>
      </section>

    </>
  );
};

