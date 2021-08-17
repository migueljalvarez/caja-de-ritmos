import React, { useState } from "react";

const activeStyle = {
  backgroundColor: "orange",
  boxShadow: "0 3px orange",
  height: 77,
  marginTop: 13,
};

const inactiveStyle = {
  backgroundColor: "grey",
  marginTop: 10,
  boxShadow: "3px 3px 5px black",
};

const DrumPad = ({
  clip,
  clipId,
  keyCode,
  keyTrigger,
  power,
  updateDisplay,
}) => {
  const [padStyle, setPadStyle] = useState(inactiveStyle);

  const activatePad = () => {
    if (power) {
      setPadStyle(activeStyle);
    } else if (padStyle.marginTop === 13) {
      setPadStyle(inactiveStyle);
    } else {
      setPadStyle({
        height: 77,
        marginTop: 13,
        backgroundColor: "grey",
        boxShadow: "0 3px grey",
      });
    }
  };
  const inactivePad = () => {
    setPadStyle(inactiveStyle);
  };
  const playSound = () => {
    if (power) {
      const sound = document.getElementById(keyTrigger);
      sound.currentTime = 0;
      sound.play();
    }
    activatePad();
    setTimeout(() => inactivePad(), 100);
    updateDisplay(clipId.replace(/-/g, " "));
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === keyCode) {
      playSound();
    }
  };

  window.addEventListener("keydown", handleKeyPress);

  return (
    <div className="drum-pad" id={clipId} onClick={playSound} style={padStyle}>
      <audio className="clip" id={keyTrigger} src={clip} />
      {keyTrigger}
    </div>
  );
};
export default DrumPad;
