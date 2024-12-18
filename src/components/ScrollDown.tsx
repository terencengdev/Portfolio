import ScrollMouse from "/scroll-mouse.svg";
import ScrollCircle from "/scroll-circle.svg";

export function ScrollDown() {
  return (
    <div className="scroll-circle">
      <img src={ScrollCircle} />
      <div className="scroll-mouse">
        <img src={ScrollMouse} />
      </div>
    </div>
  );
}
