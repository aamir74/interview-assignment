import {
  CAvatar,
  CButton,
} from "@coreui/react";

import { TiTick } from "react-icons/ti";

const Step4 = ({ userData }) => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <CAvatar color="primary" textColor="white" className="mb-4">
          <TiTick size={25} />
        </CAvatar>
        <h4>Congratulations {userData.displayName}</h4>
        <p style={{ fontSize: "small", color: "grey" }}>
          You have completed onboarding, you can start using the Eden
        </p>
      </div>
      <CButton
        style={{
          backgroundColor: "royalblue",
          width: "80%",
        }}
      >
        Launch Eden
      </CButton>
    </div>
  );
};
export { Step4 };
