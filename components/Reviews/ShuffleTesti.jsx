import { motion } from "framer-motion";
import { useRef, useState } from "react";
import zan from "@/public/zan.jpg";
import kellie from "@/public/kellie.jpg";
import avatar from "@/public/avatar.png";
import Image from "next/image";

const ShuffleCards = () => {

    const [order, setOrder] = useState(["front", "middle", "back"]);

    const handleShuffle = () => {
        const orderCopy = [...order];
        orderCopy.unshift(orderCopy.pop());
        setOrder(orderCopy);
    };

    return (
        <div className="grid place-content-center overflow-hidden bg-slate-900 py-16 text-slate-50">
            <div className="relative mx-auto h-[450px] w-[300px]">
                <Card
                imgUrl={zan}
                testimonial="I feel like I've learned as much from X as I did completing my masters. It's the first thing I read every morning."
                author="Jenn F. - Marketing Director @ Square"
                handleShuffle={handleShuffle}
                position={order[0]}
                />
                <Card
                imgUrl={kellie}
                testimonial="My boss thinks I know what I'm doing. Honestly, I just read this newsletter."
                author="Adrian Y. - Product Marketing @ Meta"
                handleShuffle={handleShuffle}
                position={order[1]}
                />
                <Card
                imgUrl={avatar}
                testimonial="Can not believe this is free. If X was $5,000 a month, it would be worth every penny. I plan to name my next child after X."
                author="Devin R. - Growth Marketing Lead @ OpenAI"
                handleShuffle={handleShuffle}
                position={order[2]}
                />
            </div>
        </div>
    );

};


const Card = ({ handleShuffle, testimonial, position, imgUrl, author }) => {

  const mousePosRef = useRef(0);

  const onDragStart = (e) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e) => {
    const diff = mousePosRef.current - e.clientX;

    if (diff > 150) {
      handleShuffle();
    }

    mousePosRef.current = 0;
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[300px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <Image
        src={imgUrl}
        alt={`Image of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
        width={100}
      />
      <span className="text-center text-lg italic text-slate-400 max-w-[260px]">
        "{testimonial}"
      </span>
      <span className="text-center text-sm font-medium text-indigo-400">
        {author}
      </span>
    </motion.div>
  );

};


export default ShuffleCards;