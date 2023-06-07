import { useState } from "react";
import "../styles/ScrollDown.css";

function ScrollDown() {
  const [scroll, setScroll] = useState(false);

  const fadeScroll = () => {
    window.scrollY >= 150 ? setScroll(true) : setScroll(false);
  };

  window.addEventListener("scroll", fadeScroll);

  return (
    <div
      className={
        scroll ? "button-container scroll-inactive" : "button-container "
      }
    >
      <div className="scroll-button"></div>
      <h6 className="scroll-button-text">Scroll</h6>
    </div>
  );
}

export default ScrollDown
