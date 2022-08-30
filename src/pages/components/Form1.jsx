import { CButton, CForm, CFormInput } from "@coreui/react";

const Form1 = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h4>Welcome! First things first...</h4>
        <p style={{ fontSize: "small", color: "grey" }}>
          You can always change them later
        </p>
      </div>
      <CForm className="w-75">
        <CFormInput
          type="text"
          id="full-name"
          label="Full Name"
          placeholder="Steve Jobs"
          aria-describedby="exampleFormControlInputHelpInline"
        />
        <br />
        <CFormInput
          type="text"
          id="display-name"
          label="Display Name"
          placeholder="Steve"
          aria-describedby="exampleFormControlInputHelpInline"
        />
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
export { Form1 };
