import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Countdown from "./components/Countdown";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
      console.log("updated");
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="font-[Inter] m-0 p-0 box-border">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 4,
                },
              },
            },
            particles: {
              color: {
                value: "#99bb99",
              },
              move: {
                direction: "bottom",
                enable: true,
                random: false,
                speed: 5,
                straight: false,
              },
              number: {
                value: 80,
              },
              opacity: {
                value: 0.6,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 0.5, max: 4 },
              },
            },
          }}
        />
      )}
      <div className="flex flex-col gap-y-10 items-center h-screen">
        <h1 className="font-[Berkshire_Swash] text-white text-4xl my-20">2025 Christmas Countdown</h1>
        <Countdown />
        <div className="text-gray-300 text-lg mt-30">Just 1 more shower until Christmas and 2 more until spring break!</div>
      </div>
    </div>
  );
}

export default App;
