import { Steps } from "./components/Steps";
import { AiFillApple } from "react-icons/ai";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { Step4 } from "./components/Step4";
import { useState } from "react";

const Home = () => {
  const [formStep, setFormStep] = useState(1);
  const [userData, setUserData] = useState({});

  const handleSubmit = (data, step) => {
    setUserData((prevData) => {
      return { ...prevData, ...data };
    });
    setFormStep(step);
  };

  return (
    <div className="my-2 d-flex justify-content-center">
      <div>
        <div className="my-4 d-flex justify-content-center">
          <AiFillApple size={25} color={"#4169E1"} />
          <h4>Eden</h4>
        </div>
        <Steps formStep={formStep} />
        {formStep === 1 && <Step1 handleSubmit={handleSubmit} />}
        {formStep === 2 && <Step2 handleSubmit={handleSubmit} />}
        {formStep === 3 && <Step3 handleSubmit={handleSubmit} />}
        {formStep === 4 && <Step4 userData={userData} />}
      </div>
    </div>
  );
};
export { Home };
