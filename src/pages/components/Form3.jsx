import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
} from "@coreui/react";

import { BsPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
const Form3 = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h4>How are you planning to use Eden?</h4>
        <p style={{ fontSize: "small", color: "grey" }}>
          We'll streamline your setup experience accordingly
        </p>
      </div>
      <div className="w-75">
        <div className="d-flex justify-content-center">
          <CCard
            className={`mb-3 border-primary mx-2`}
            style={{ width: "14rem", height: "10rem" }}
          >
            <CCardBody>
              <CCardTitle>
                <BsPersonFill size={25} color="royalblue" />
              </CCardTitle>
              <CCardTitle> For Myself</CCardTitle>
              <p style={{ fontSize: "small", color: "grey" }}>
                Write better, Think more clearly, Stay organized.
              </p>
            </CCardBody>
          </CCard>
          <CCard
            className={`mb-3 mx-2`}
            style={{ width: "14rem", height: "10rem" }}
          >
            <CCardBody>
              <CCardTitle>
                <RiTeamFill size={25} />
              </CCardTitle>
              <CCardTitle> For Myself</CCardTitle>
              <p style={{ fontSize: "small", color: "grey" }}>
                Write better, Think more clearly, Stay organized.
              </p>
            </CCardBody>
          </CCard>
        </div>

        <br />
        <CButton
          style={{
            backgroundColor: "royalblue",
            // marginTop: "20px",
            width: "100%",
          }}
        >
          Create Workspace
        </CButton>
      </div>
    </div>
  );
};
export { Form3 };
