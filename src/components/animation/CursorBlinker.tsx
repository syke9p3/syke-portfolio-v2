import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

function CursorBlinker({blinkDelay}: {blinkDelay: number}) {

  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 0, 0, 1, 1, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1],
        delay: blinkDelay
      }
    }
  };

  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-5 w-[10px] translate-y-1 bg-catppuccinText"
    />
  );
}

export default function TextAnim({baseText, delay, blinkDelay, removeCursor, removeCursorDelay}:{baseText: string, delay: number, blinkDelay: number, removeCursor?: boolean, removeCursorDelay: number }) {
  const count = useMotionValue(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const controls = animate(count, baseText.length, {
        duration: 4,
        ease: 'easeInOut',
        onComplete: () => {removeCursor && setTimeout(() => setIsTypingComplete(true), removeCursorDelay * 1000)},
      });
      return controls.stop;
    }, delay * 1000); // convert delay to milliseconds

    return () => clearTimeout(timeoutId); // cleanup timeout on unmount
  }, [baseText.length, delay, count]);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );


  return (
    <span className="">
      <motion.span>
         {displayText}
      </motion.span>
      {!isTypingComplete && <CursorBlinker blinkDelay={blinkDelay}/>}
    </span>
  );
}
