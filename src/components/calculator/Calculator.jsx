import React from "react";
import { useRef, useState } from "react";
import Screen from "./Screen";
import Keypad from "./Keypad";

export default function Calculator() {
  const ref = useRef(null);
  const [calc, setCalc] = useState("");
  const [calculated, setCalculated] = useState(false);
  const operations = ["/", "*", "+", "-", "."];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const updateCalc = (value) => {
    const displayValue = ref.current;
    if (value === "0" && calc === "0") {
      return clear();
    } else if (
      (operations.includes(value) && calc == "") ||
      (operations.includes(value) && operations.includes(calc.slice(-1)))
    ) {
      return;
    } else if (!operations.includes(value)) {
      setCalc((calc + value).toString());

      if (calc.length > 7) {
        displayValue.style.fontSize = "2.5rem";
      }
      if (calc.length === 11 && !operations.includes(value)) {
        displayValue.style.width = "fit-content";
        displayValue.style.overflow = "hidden";
        return setCalc(calc.toString());
      } else if (calc.length === 11 && operations.includes(value)) {
        console.log("hi");
      } else {
        console.error();
      }
    }

    if (calculated === true && operations.includes(value)) {
      setCalculated(false);
    } else if (calculated === true && !operations.includes(value)) {
      setCalculated(false);
      return setCalc(value);
    } else if (calculated === true && value === "0") {
      setCalculated(false);
      return setCalc("");
    } else {
      console.error;
    }
    setCalc(calc + value);
  };

  const calculate = () => {
    if (eval(calc) === undefined) {
      return;
    }
    setCalculated(true);
    setCalc(eval(calc).toString());
  };

  const clear = () => {
    setCalculated(false);
    setCalc("");
  };

  const del = () => {
    if (calc === "") {
      return;
    }
    const displayValue = ref.current;
    if (calc.length < 7) {
      displayValue.style.fontSize = "3.3rem";
    }
    setCalc(calc.slice(0, -1));
  };

  return (
    <article className="calculator">
      <Screen ref={ref} calc={calc} />
      <Keypad
        updateCalc={updateCalc}
        clear={clear}
        del={del}
        calculate={calculate}
      />
    </article>
  );
}
