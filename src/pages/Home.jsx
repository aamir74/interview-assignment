import { Steps } from "./components/Steps";
import { AiFillApple } from "react-icons/ai";
import { Form1 } from "./components/Form1";
import { Form2 } from "./components/Form2";
import { Form3 } from "./components/Form3";
import { Step4 } from "./components/Step4";

const Home = () => {
  return (
    <div className="my-2 d-flex justify-content-center">
      <div>
        <div className="my-4 d-flex justify-content-center">
          <AiFillApple size={25} color={"#4169E1"} />
          <h4>Eden</h4>
        </div>
        <Steps />
        <Form1 />
        {/* <Form2 />
        <Form3 />
        <Step4 /> */}
      </div>
    </div>
  );
};
export { Home };
