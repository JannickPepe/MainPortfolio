import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const VanishText = () => {

    return (
        <div className="mt-6 mb-6">
            <h3 className="text-3xl font-medium text-slate-800">
                <span className="font-bold">My development interest: </span>
                <AnimatedText
                phrases={[
                    "JS Frameworks",
                    "CSS Frameworks",
                    "UI Frameworks",
                    "Fullstack development",
                    "SQL & NoSQL",
                ]}
                />
            </h3>
        </div>
    );

};

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 3;
const STAGGER = 0.025;

const AnimatedText = ({ phrases }) => {
    const countRef = useRef(0);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
        setActive((pv) => (pv + 1) % phrases.length);
        }, WAIT_TIME);

        return () => clearInterval(intervalRef);
    }, [phrases]);

    return (
        <div className="flex flex-wrap items-start justify-start gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-4">
            <AnimatePresence mode="popLayout">
                {phrases[active].split(" ").map((word, wordIndex) => {
                    if (wordIndex === 0) {
                    countRef.current = 0;
                    }

                    return (
                        <motion.div key={word} className="whitespace-nowrap text-violet-50">
                            {word.split("").map((letter, letterIndex) => {
                                const content = (
                                    <motion.span
                                        initial={{
                                        opacity: 0,
                                        scale: 0,
                                        }}
                                        animate={{
                                        opacity: 1,
                                        scale: 1,
                                        }}
                                        exit={{
                                        opacity: 0,
                                        scale: 0,
                                        }}
                                        transition={{
                                        delay: countRef.current * STAGGER,
                                        ease: "easeInOut",
                                        duration: 0.25,
                                        }}
                                        className="inline-block"
                                        key={letterIndex}
                                    >
                                        {letter}
                                    </motion.span>
                                );

                                countRef.current++;
                                return content;
                            })}
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );

};