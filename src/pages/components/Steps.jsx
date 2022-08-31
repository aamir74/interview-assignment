import { memo } from "react";
import "./Steps.css";

const Steps = memo(({ formStep }) => {
  return (
    <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
      {/* <!-- Step 1 --> */}
      <li
        className={`${
          formStep >= 1 ? "form-stepper-active" : "form-stepper-unfinished"
        } text-center form-stepper-list`}
        step="1"
      >
        <p className="mx-2">
          <span className="form-stepper-circle">
            <span>1</span>
          </span>
        </p>
      </li>
      {/* <!-- Step 2 --> */}
      <li
        className={`${
          formStep >= 2 ? "form-stepper-active" : "form-stepper-unfinished"
        } text-center form-stepper-list`}
        step="2"
      >
        <p className="mx-2">
          <span className="form-stepper-circle text-muted">
            <span>2</span>
          </span>
        </p>
      </li>
      {/* <!-- Step 3 --> */}
      <li
        className={`${
          formStep >= 3 ? "form-stepper-active" : "form-stepper-unfinished"
        } text-center form-stepper-list`}
        step="3"
      >
        <p className="mx-2">
          <span className="form-stepper-circle text-muted">
            <span>3</span>
          </span>
        </p>
      </li>
      <li
        className={`${
          formStep >= 4 ? "form-stepper-active" : "form-stepper-unfinished"
        } text-center form-stepper-list`}
        step="4"
      >
        <p className="mx-2">
          <span className="form-stepper-circle text-muted">
            <span>4</span>
          </span>
        </p>
      </li>
    </ul>
  );
});
export { Steps };
