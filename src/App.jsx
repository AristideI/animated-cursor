import "./App.css";
// import AnimatedCircles from "./AnimatedCircles";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".circle-text",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
    });

    tl.to(".circle-text", {
      scale: 5,
      duration: 2,
    });
  }, []);

  return (
    <div className="App">
      <div style={{ height: "100vh" }}></div> {/* Placeholder */}
      <div className="circle-text">ZOOM ME</div>
      <div style={{ height: "200vh", background: "#eee" }}>
        Your content here...
      </div>
    </div>
  );
}

export default App;
