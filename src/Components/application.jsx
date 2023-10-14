import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Application() {
  return (
    <MDBContainer fluid>
      <center>
        <MDBCard
          className="text-black"
          style={{ borderRadius: "25px", width: "70%", marginTop: "130px" }}
        >
          <form
            action="http://localhost:4000/register"
            method="post"
            encType="multipart/form-data"
          >
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    <b>Registration Form</b>
                  </p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="Your Name"
                      id="form1"
                      type="text"
                      name="name"
                      style={{ width: "340px" }}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Your Email"
                      id="form2"
                      type="email"
                      name="email"
                      style={{ width: "340px" }}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Password"
                      id="form3"
                      type="password"
                      name="password"
                      style={{ width: "340px" }}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="file me-3" size="lg" />
                    <MDBInput
                      id="form4"
                      type="file"
                      name="profileimage"
                      style={{ width: "340px" }}
                    />
                  </div>
                  <MDBBtn className="mb-4" size="lg">
                    Register
                  </MDBBtn>
                </MDBCol>
                <Link to="/viewusers">View Users</Link>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </form>
        </MDBCard>
      </center>
    </MDBContainer>
  );
}

export default Application;
