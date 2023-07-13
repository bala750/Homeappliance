// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Button } from "react-bootstrap";
// // import React, { useEffect } from 'react';
// // import './Components/Slideshow.js';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Styles/main.css";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
// 	const navRef = useRef();
//     const nav=useNavigate();

// 	const showNavbar = () => {
// 		navRef.current.classList.toggle(
// 			"responsive_nav"
// 		);
// 	};
//     function handleLogin() {
//         nav("/login");
//     }
//     function handleSignupPage() {
//         nav("/SignUpPage");
//     }
//     function handleAbout()
//     {
//         nav("/About");
//     }
// 	return (
//         <div className="hello">
// 		<header>
// 			<h3>MEDCARE+</h3>
// 			<nav ref={navRef}>
// 				<a href="/#">Home</a>
// 				<a href="/#">Policy Provider</a>
// 				<a href="/#">policy</a>
// 				<a on onClick={handleAbout}>About Us</a>
//                 <a onClick={handleLogin}>Login</a>
//                 <a  onClick={handleSignupPage}>Sign Up</a>
//                 <a href="#">Contact Us</a>
// 				<button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
// 			</nav>
// 			<button
// 				className="nav-btn"
// 				onClick={showNavbar}>
// 				<FaBars />
// 			</button>
// 		</header>
//        <div class="content">
//             <h1>
//                Welcome to MedCare+
//             </h1>
//             </div>
//             <br></br>
//             <div class="wel">
//             <h3>
//             Hello! At MedCare+, we're dedicated to ensuring your health insurance <br></br> experience is as simple as possible. From finding the right plan to staying<br></br> connected with your insurer, our app provides the tools you need to protect<br></br> your health and financial security
//             </h3>
//         </div>
//         <Button variant="default"
//     style={{ color: "white", background: "#002234"}}
// >
//     Get started
// </Button>
// </div>
// 	);
// }
// export default Navbar;


import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const nav = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  function handleLogin() {
    nav("/login");
  }

  function handleSignupPage() {
    nav("/SignUpPage");
  }

  function handleAbout() {
    nav("/About");
  }
  function handlePolicy() {
    nav("/Policy");
  }
  function handleContact() {
    nav("/Contact");
  }
  function handleHome() {
    nav("/Home");
  }

  function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
  }

  return (
    <div className="hello">
      <header>
        <h3>SERVICE CENTER</h3>
        <nav ref={navRef}>
          <a onClick={handleHome}>Home</a>
          <a onClick={handlePolicy}>Request</a>
          <div className="dropdown">
            {/* <button className="dropbtn" onClick={toggleDropdown}>
              Dropdown <i className="fa fa-caret-down"></i>
            </button> */}
            {/* <div className="dropdown-content" id="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div> */}
          </div>
          <a onClick={handleAbout}>About Us</a>
          <a onClick={handleLogin}>Login</a>
          <a onClick={handleSignupPage}>Sign Up</a>
          <a onClick={handleContact}>Contact us</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <div className="content">
        <h1>Welcome to Service center</h1>
      </div>
      <br />
      {/* <div className="wel">
        <h3>
          Hello! At MedCare+, we're dedicated to ensuring your health insurance
          <br />
          experience is as simple as possible. From finding the right plan to
          staying
          <br />
          connected with your insurer, our app provides the tools you need to
          protect
          <br />
          your health and financial security
        </h3>
      </div> */}
      {/* <Button
        variant="default"
        style={{ color: "white", background: "#002234" }}
      >
        Get started
      </Button> */}
    </div>
  );
}

export default Navbar;
