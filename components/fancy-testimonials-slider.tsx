'use client';

import { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Transition } from '@headlessui/react';
import { FaGithub} from "react-icons/fa";
import Link from 'next/link';

interface Testimonial {
  img: StaticImageData
  quote: string
  name: string
  role: string
  github: string
};

export default function FancyTestimonialsSlider({ testimonials }: { testimonials: Testimonial[] }) {

  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const autorotateTiming: number = 7000

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === testimonials.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])  


  return (
    <div className="max-w-sm lg:max-w-2xl xl:max-w-2xl mx-auto text-center mt-6 md:mt-6 lg:mt-10 xl:mt-10">
      {/* Testimonial image */}
      <div className="relative h-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] lg:w-[480px] xl:w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">

            {testimonials.map((testimonial, index) => (
              <Transition
                key={index}
                show={active === index}
                className="absolute inset-0 h-full -z-10"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
              >
                <Image className="relative top-11 left-1/2 -translate-x-1/2 rounded-full" src={testimonial.img} width={56} height={56} alt={testimonial.name} />
              </Transition>
            ))}
            
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>

          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div className="text-base lg:text-2xl xl:text-2xl font-medium lg:font-bold xl:font-bold text-slate-900 dark:text-white before:content-['\201C'] after:content-['\201D']">
                {testimonial.quote}
              </div>
              <div className="flex flex-col items-center">
                <Link target='_black' href={testimonial.github}>
                  <div className="text-sm  bg-indigo-600 px-2 text-white rounded-full h-10 w-10 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    <FaGithub size={24} />
                  </div>
                </Link>
              </div>
            </Transition>
          ))}

        </div>
      </div>
      
      {/* Buttons */}
      <div className="flex flex-wrap justify-center -m-1.5">

        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-sm shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 
            ${active === index ? 'bg-gradient-to-r from-sky-600 to-purple-400 text-white shadow-indigo-950/10 font-semibold' 
            : 'bg-white hover:bg-indigo-100 text-slate-900'}`}
            onClick={() => { setActive(index); setAutorotate(false); }}
          >
            <span>{testimonial.name}</span> <span className={`${active === index ? 'text-indigo-200' : 'text-slate-300'}`}>-</span> <span>{testimonial.role}</span>
          </button>
        ))}

      </div>
    </div>
  )
}