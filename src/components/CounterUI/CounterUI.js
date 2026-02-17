import React, { useState } from "react";
import "./CounterUI.css";
import { FaCouch } from "react-icons/fa";
import CountUp from "react-countup";

const CounterUI = () => {
  const [isCount, setisCount] = useState(false);

  window.addEventListener('scroll', (e) => {
    if (window.scrollY > 400) {
      setisCount(true)
      console.log(window.scrollY)
    } else {
      setisCount(false)
    }
  })
  return (
    <div className="CounterUIContainer">
      <h1 className="countHeading">Outcomes of nearly two decades of effort, dedication, and compassion</h1>
      <div className="counterBox">
        <div className="counterItem">
          <div >
            {
              isCount ? <CountUp end={16} /> : "0"
            }

            +
          </div>
          <p>
            {" "}
            Years of trusted experience
          </p>
        </div>

        <div className="counterItem">
          <div >
            {
              isCount ? <CountUp end={1000} /> : "0"
            }

            +          </div>

          <p>
            {" "}
            Students dreams fulfilled
          </p>
        </div>

        <div className="counterItem">
          <div >
            {
              isCount ? <CountUp end={10000} /> : "0"
            }

            +          </div>

          <p>
            {" "}
            Students
          </p>
        </div>

        <div className="counterItem">
          <div >
            {
              isCount ? <CountUp end={10000} /> : "0"
            }

            +          </div>

          <p>
            {" "}
            Courses
          </p>
        </div>
      </div>
    </div>
  );
};

export default CounterUI;
