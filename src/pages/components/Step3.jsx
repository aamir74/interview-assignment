import { CButton, CCard, CCardBody, CCardTitle } from "@coreui/react";
import { useState } from "react";

import { BsPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

const Step3 = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    formType: "",
  });

  const [submit, setSubmit] = useState(false);

  const changeHandler = (type) => {
    const data = { formType: type };
    setFormData(data);
    if (data.formType) setSubmit(true);
    else setSubmit(false);
  };

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
            className={` ${
              formData.formType === "myself" ? "border-primary" : ""
            }`}
            style={{
              width: "14rem",
              height: "10rem",
              cursor: "pointer",
              margin: "0px 10px",
            }}
            id="formType"
            value="myself"
            onClick={() => changeHandler("myself")}
          >
            <CCardBody>
              <CCardTitle>
                <BsPersonFill
                  size={25}
                  color={formData.formType === "myself" ? "royalblue" : ""}
                />
              </CCardTitle>
              <CCardTitle> For Myself</CCardTitle>
              <p style={{ fontSize: "small", color: "grey" }}>
                Write better, Think more clearly, Stay organized.
              </p>
            </CCardBody>
          </CCard>
          <CCard
            className={` ${
              formData.formType === "team" ? "border-primary" : ""
            }`}
            style={{
              width: "14rem",
              height: "10rem",
              cursor: "pointer",
              margin: "0px 10px",
            }}
            id="formType"
            value="team"
            onClick={() => changeHandler("team")}
          >
            <CCardBody>
              <CCardTitle>
                <RiTeamFill
                  size={25}
                  color={formData.formType === "team" ? "royalblue" : ""}
                />
              </CCardTitle>
              <CCardTitle> With my team</CCardTitle>
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
          onClick={() => handleSubmit(formData, 4)}
          disabled={!submit}
        >
          Create Workspace
        </CButton>
      </div>
    </div>
  );
};
export { Step3 };
