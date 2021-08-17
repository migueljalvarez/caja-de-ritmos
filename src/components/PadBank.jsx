import React from "react";
import DrumPad from "./DrumPad";

const PadBank = ({ currentPadBank, power, updateDisplay }) => {
  let padBank;
  if (power) {
    padBank = currentPadBank.map((drumObj, i, padBankArr) => (
      <DrumPad
        key={i}
        clip={padBankArr[i].url}
        clipId={padBankArr[i].id}
        keyCode={padBankArr[i].keyCode}
        keyTrigger={padBankArr[i].keyTrigger}
        power={power}
        updateDisplay={updateDisplay}
      />
    ));
  } else {
    padBank = currentPadBank.map((drumObj, i, padBankArr) => (
      <DrumPad
        key={i}
        clip="#"
        clipId={padBankArr[i].id}
        keyCode={padBankArr[i].keyCode}
        keyTrigger={padBankArr[i].keyTrigger}
        power={power}
        updateDisplay={updateDisplay}
      />
    ));
  }
  return <div className="pad-bank">{padBank}</div>;
};

export default PadBank;
