import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const {/*cart,*/totalQuantity} = useSelector((state)=>state.allcart)
  return (
    <>
      <MDBNavbar light bgColor="warning" style={{position:"fixed",width:'100%',top:'0',zIndex:"1000"}}>
        <MDBContainer>
          <MDBNavbarBrand href="/">
            <MDBIcon fab icon="amazon" style={{ fontSize: "3rem" }} />
          </MDBNavbarBrand>

        <Link to="/">  <MDBBtn style={{fontSize:"0.8rem"}} color="dark" rippleColor="dark">
          <MDBIcon  fas icon="align-justify" /> &nbsp; All Products
          </MDBBtn></Link>
          <Link to="/cart"><MDBBtn color="dark"><MDBIcon fas icon="shopping-cart" /> Cart {totalQuantity}</MDBBtn></Link>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
