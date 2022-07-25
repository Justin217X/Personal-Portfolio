import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      backgroundMode: {
        enable: true,
        zIndex: 0,
      },
      background: {
        color: "",
      },
      fpsLimit: 120,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: { enable: false, force: 2, smooth: 10 },
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 0.3,
            opacity: 0.5,
            size: 3,
            speed: 1,
          },
          grab: { distance: 400, line_linked: { opacity: 0.9 } },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#000000" },
        links: {
          color: "#000000",
          distance: 500,
          enable: false,
          opacity: 0.1,
          width: 2,
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
          direction: "top",
          enable: true,
          outMode: "out",
          random: false,
          size: true,
          speed: 2,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 150 },
        opacity: {
          random: false,
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 2,
        },
      },
      detectRetina: true,
    }}
  />
  );
};

export default Particle;