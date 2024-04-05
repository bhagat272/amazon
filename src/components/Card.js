import React from "react";
import {
  MDBCard,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Products } from "./Products";
import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "../feature/cartSlice";

const Card = () => {
  const items = useSelector((state) => state.allcart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <MDBContainer className="mt-4">
        <MDBRow className="d-flex align-items-stretch">
          {" "}
          {/* Added this class */}
          {items.map((val) => (
            <MDBCol md="3" className="d-flex align-items-stretch">
              {" "}
              {/* Added this class */}
              <MDBCard className="mb-4">
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    id="product_img"
                    src={val.thumbnail}
                    fluid
                    alt={val.brand + val.category}
                  />
                  <a>
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{val.title}</MDBCardTitle>
                  <MDBCardText style={{ display: "flex", flexWrap: "wrap" }}>
                    {val.description}
                  </MDBCardText>
                  <h4>$ {val.price}</h4>
                </MDBCardBody>{" "}
                <MDBBtn
                  onClick={() => dispatch(addtocart(val))}
                  className="ms-4 mb-4"
                  style={{ width: "7rem" }}
                  href=""
                >
                  Add Cart
                </MDBBtn>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Card;
