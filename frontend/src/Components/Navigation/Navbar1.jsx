// import React, { useState } from "react";
// import "./Navbar.css";
// import Logo from "../../assets/landing/logo-removebg.png";

// export default function Navbar() {
//   const [isNavActive, setNavActive] = useState(false);

//   const toggleNavbar = () => {
//     setNavActive(!isNavActive);
//   };

//   return (
//     <div
//       style={{
//         position: "sticky",
//         top: 0,
//         zIndex: 999,
//       }}>
//       <header className={`header ${isNavActive ? "active" : ""}`}>
        
//         <img
//           // src="./images/logo-removebg.png"
//           src={Logo}
//           alt="nayi pehel logo"
//           className="logo"
//         />
//         {/* <h2 className="fnt-heading">Towards Happiness</h2> */}
//         <nav className="navbar">
//           <ul className="navbar-list">
//             <li>
//               <a className="navbar-link" href="#">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a className="navbar-link" href="#">
//                 About
//               </a>
//             </li>
//             <li>
//               <a className="navbar-link" href="#">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a className="navbar-link" href="#">
//                 Gallery
//               </a>
//             </li>
//             <li>
//               <a
//                 className="navbar-link"
//                 href="#"
//                 target="_blank"
//                 rel="noopener noreferrer">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>

//         <div
//           style={{
//             border: "none",
//           }}
//           className="mobile-navbar-btn"
//           onClick={toggleNavbar}>
//           <ion-icon
//             name={isNavActive ? "close-outline" : "menu-outline"}
//             className="mobile-nav-icon">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               class="bi bi-list"
//               viewBox="0 0 16 16">
//               <path
//                 fill-rule="evenodd"
//                 d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
//               />
//             </svg>
//           </ion-icon>
//         </div>
//       </header>

//       {/* Ionicons Script */}
//       <script
//         type="module"
//         src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
//       <script
//         nomodule
//         src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

//       {/* Your custom script */}
//       <script src="index.js"></script>
//     </div>
//   );
// }
