import { useState } from "react";
import { CButton, CForm, CFormInput } from "@coreui/react";

const Step1 = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
  });

  const [submit, setSubmit] = useState(false);

  const changeHandler = (e) => {
    const data = { ...formData, [e.target.id]: e.target.value };
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
    if (data.fullName && data.displayName) setSubmit(true);
    else setSubmit(false);
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h4>Welcome! First things first...</h4>
        <p style={{ fontSize: "small", color: "grey" }}>
          You can always change them later
        </p>
      </div>
      <CForm className="w-100">
        <CFormInput
          type="text"
          id="fullName"
          label="Full Name"
          placeholder="Steve Jobs"
          aria-describedby="exampleFormControlInputHelpInline"
          onChange={changeHandler}
        />
        <br />
        <CFormInput
          type="text"
          id="displayName"
          label="Display Name"
          placeholder="Steve"
          aria-describedby="exampleFormControlInputHelpInline"
          onChange={changeHandler}
        />
        <br />
        <CButton
          style={{
            backgroundColor: "royalblue",
            width: "100%",
          }}
          onClick={() => handleSubmit(formData, 2)}
          disabled={!submit}
        >
          Create Workspace
        </CButton>
      </CForm>
    </div>
  );
};
export { Step1 };
