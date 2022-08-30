import {
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
} from "@coreui/react";

const Form2 = () => {
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
          id="workspace-name"
          label="Workspace Name"
          placeholder="Eden"
          aria-describedby="exampleFormControlInputHelpInline"
        />
        <br />
        <CFormLabel htmlFor="basic-url">
          <span className="d-flex justify-content-center">
            Workspace URL
            <p style={{ fontSize: "small", color: "grey" }}> (optional)</p>
          </span>
        </CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon3">www.eden.com/</CInputGroupText>
          <CFormInput
            id="basic-url"
            aria-describedby="basic-addon3"
            placeholder="Example"
          />
        </CInputGroup>
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
      </CForm>
    </div>
  );
};
export { Form2 };
