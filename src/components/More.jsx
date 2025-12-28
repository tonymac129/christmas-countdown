import { motion } from "framer-motion";
import { useState } from "react";

const activities = [
  "showers",
  "toilet breaks",
  "school days",
  "Christmas movies",
  "meals",
  "sleeps",
  "doomscroll sessions",
  "???",
  "snow storms",
  "Christmas songs",
  "car rides",
  "road trips",
  "meetings",
];

function More() {
  const [index, setIndex] = useState(0);

  function randomIndex() {
    const newNum = Math.floor(Math.random() * activities.length);
    if (newNum === index) {
      return randomIndex();
    }
    setIndex(newNum);
  }

  return (
    <div className="flex flex-col items-center gap-y-5">
      <div className="text-gray-300 text-lg mt-30 flex items-center gap-1.5">
        <code className="border border-gray-800 rounded-sm px-1">{Math.round(Math.random() * 500) / 10}</code> more{" "}
        <code className="border border-gray-800 rounded-sm px-1">{activities[index]}</code> until presents!
      </div>
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 1, y: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-linear-to-br from-red-500 to-orange-500  rounded-full text-lg text-white font-bold px-7 py-2 cursor-pointer"
        onClick={randomIndex}
      >
        What?
      </motion.button>
    </div>
  );
}

export default More;
