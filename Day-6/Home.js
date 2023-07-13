import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
function Home() {
   const nav = useNavigate();
        const handleHome=()=>{
       nav("/Home")
        }
  return (
    <div className="home" style={{ backgroundImage: `url(https://live.staticflickr.com/8147/7501146568_7e35fe489f_b.jpg)` }}>
      <div className="headerContainer">
        <h2> Nambi vaanga santhosama ponga</h2>
        <p>Mabla [Dharsith] Home appliance</p>
        <Link to="/">
          <button>GET STARTED</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;