import { useState } from "react";
import {
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
} from "@coreui/react";

const Step2 = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    workspaceName: "",
    url: "",
  });

  const [submit, setSubmit] = useState(false);

  const changeHandler = (e) => {
    const data = { ...formData, [e.target.id]: e.target.value };
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
    if (data.workspaceName && data.url) setSubmit(true);
    else setSubmit(false);
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h4>Let's setup a home for all your work</h4>
        <p style={{ fontSize: "small", color: "grey" }}>
          You can always create another workspace
        </p>
      </div>
      <CForm className="w-75">
        <CFormInput
          type="text"
          id="workspaceName"
          label="Workspace Name"
          placeholder="Eden"
          aria-describedby="exampleFormControlInputHelpInline"
          onChange={changeHandler}
        />
        <br />
        <CFormLabel htmlFor="url">
          <span className="d-flex justify-content-center">
            Workspace URL
            <p style={{ fontSize: "small", color: "grey" }}> (optional)</p>
          </span>
        </CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon3">www.eden.com/</CInputGroupText>
          <CFormInput
            id="url"
            aria-describedby="basic-addon3"
            placeholder="Example"
            onChange={changeHandler}
          />
        </CInputGroup>
        <br />
        <CButton
          style={{
            backgroundColor: "royalblue",
            width: "100%",
          }}
          onClick={() => handleSubmit(formData, 3)}
          disabled={!submit}
        >
          Create Workspace
        </CButton>
      </CForm>
    </div>
  );
};
export { Step2 };
