// import React from "react";
// import SimpleImageSlider from "react-simple-image-slider";
// import { useNavigate } from 'react-router-dom';
// export default function App() {
//     const nav = useNavigate();
//     const handleAbout=()=>{
//      nav("/About")
//     }
//    const sliderImages = [
//       {
//          url: "https://i.pinimg.com/236x/ae/ed/ea/aeedeac80aa2f35905a738ba3d4acc28.jpg",
//       },
//       {
//          url: "https://www.oho.com/sites/default/files/2023-03/Untitled%20design%20%289%29.png",
//       },
//       {
//          url: "https://1000logos.net/wp-content/uploads/2021/08/LIC-Logo-768x483.png",
//       },
//       {
//          url: "https://www.shutterstock.com/image-photo/little-girl-play-bedroom-hold-syringe-1809606682",
//       },
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcR3IVlvufXIDZXxq0O8SVqwU2HeO6y7as0OXJl-YT55BA&s",
//       },
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQs_7aafRRY4vEbWz2wydowaogMmGI7mRVG6MQfZVtKDFXUGqt5iF-Mu0AYMQBEeznPkU&usqp=CAU",
//       },
//       {
//          url: "https://smartslider3.com/wpcontent/uploads/2019/01/photo_slideshow.jpg",
//       },
//    ];
   
//    return (
//       <div>
//          <h3 class="head">
//            About Us
//          </h3>
//          <div style={{ marginLeft: "70px" ,marginTop:"30px"}}>
//          <SimpleImageSlider
//             width={650}
//             height={650}
//             images={sliderImages}
//             showNavs={true}
//          />
         
//    </div>
//          <div>
//             <p></p>
//          </div>
//       </div>
//    );
// }

import React from "react";
import "./About.css";
import { useNavigate } from 'react-router-dom';
function About() {
   const nav = useNavigate();
        const handleAbout=()=>{
       nav("/About")
       }
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(https://scoopbiz.com/wp-content/uploads/2023/04/nettoshop.jpg)` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <div className="momo">
         {/* <img src="https://images.pexels.com/photos/4021810/pexels-photo-4021810.jpeg?auto=compress&cs=tinysrgb&w=600" width={"70px"} height="70px"></img> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </p>
        </div>
       
      </div>
    </div>
  );
}

export default About;
