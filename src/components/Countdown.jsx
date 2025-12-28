import { useState, useEffect } from "react";
import Digit from "./Digit";

function Countdown() {
  const [countdown, setCountdown] = useState(new Date("2026/12/25").getTime() - new Date().getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex gap-5 text-white items-end text-7xl font-[Berkshire_Swash]">
      <Digit type="Days" value={Math.floor(countdown / (1000 * 60 * 60 * 24))} red={true} />:
      <Digit type="Hours" value={Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} />:
      <Digit type="Minutes" value={Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))} red={true} />:
      <Digit type="Seconds" value={Math.floor((countdown % (1000 * 60)) / 1000)} />
    </div>
  );
}

export default Countdown;
