import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../actions/userActions";

import "./style.scss";

function Header() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (userInfo) {
      // console.log(userInfo);
    }
  }, [userInfo]);

  return (
    <Navbar bg="light" expand="lg" className="py-3 main-header">
      <Container>
        <Navbar.Brand
          href="#"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}>
          Contact List
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            {userInfo ? (
              <div className="user_info">
                <div className="user_img">
                  <img src={userInfo.pic} alt="" />
                </div>
                <h5>{userInfo.name}</h5>
                <div className="auth-button">
                  <button className="signup-button" onClick={logoutHandler}>
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="auth-button">
                <Link to="/login">
                  <button className="signin-button">Login</button>
                </Link>
                <Link to="/register">
                  <button className="signup-button">Register</button>
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
