import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Viewusers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:4000/getusers");
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4" style={{ margin: "30px" }}>
      {data.map((item, index) => (
        <MDBCol>
          <MDBCard
            className="h-100"
            style={{ width: "300px", height: "400px" }}
          >
            <MDBCardImage
              src={`http://localhost:4000/images/${item.profileimage}`}
              position="top"
              style={{ width: "300px", height: "200px" }}
            />
            <MDBCardBody>
              <MDBCardTitle>{item.name}</MDBCardTitle>
              <MDBCardText>
                <p>{item.email}</p>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  );
}
