import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const animationConfig = { y: [-20, 20], opacity: [0, 1], scale: [0.6, 1], transition: { duration: 1, type: "spring" } };

function Digit({ type, value, red = false }) {
  const [first, setFirst] = useState(Math.floor(value / 10));
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    animation.start(animationConfig);
    if (Math.floor(value / 10) !== first) {
      setFirst(Math.floor(value / 10));
    }
  }, [value]);

  useEffect(() => {
    animation2.start(animationConfig);
  }, [first]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-gray-300 text-xl">{type}</div>
      <div className={`flex text-9xl leading-30 w-35 text-center ${red ? "text-red-400" : "text-green-400"}`}>
        <motion.div animate={animation2}>{first}</motion.div>
        <motion.div animate={animation}>{value % 10}</motion.div>
      </div>
    </div>
  );
}

export default Digit;
