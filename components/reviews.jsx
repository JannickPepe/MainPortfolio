
"use client";

import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import zan from "@/public/zan.jpg";
import kellie from "@/public/kellie.jpg";
import avatar from "@/public/avatar.png";
import FancyTestimonialsSlider from '@/components/fancy-testimonials-slider';
import OriginalTestimonials from "./oldTestimonials";


export default function Reviews() { 

  const testimonials = [
    {
      img: zan,
      quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
      name: 'Zan Mamoud',
      role: 'NanoScaleSimualtions',
      github: 'https://github.com/JannickPepe',
    },
    {
      img: kellie,
      quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
      name: 'Kellie Fischer',
      role: 'Orgone Jewels',
      github: 'https://github.com/',
    },
    {
      img: avatar,
      quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
      name: 'Per Jensen',
      role: 'GF/Trekroner',
      github: 'https://github.com/JannickPepe',
    }
  ]

    const squareVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 }
    };

    const controls = useAnimation();

    const [reftwo, inView] = useInView();
        useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const { ref } = useSectionInView("Reviews");


    return (
        <motion.div 
        ref={reftwo}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className="square"
        >
          <motion.section
              className="max-w-[60rem] text-center leading-8 mb-20 sm:mb-28"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.175 }}
          >
            <section id="reviews" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
              <SectionHeading>Reviews</SectionHeading>
              
              <h2 className="text-2xl text-slate-500">My latest collaborations</h2>

              {/*
              <OriginalTestimonials />
               */}
              
              <FancyTestimonialsSlider testimonials={testimonials} />
            </section>
          </motion.section>
        </motion.div>

    );

};