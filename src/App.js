import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Routes
import Home from "./components/Home";
import Menu from "./components/Menu";
import Events from "./components/Events";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="logo-container">
          
        </div>
        <Routes>
          {" "}
          {/* Wrap Routes around Route components */}
          <Route path="/" element={<Home />} /> {/* Use "element" prop */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          <div class="copyright">
            &copy; 2024 Different Restaurant. All rights reserved.
          </div>
          <p>Website created by Rachel Skinner 
          <a href="https://next-portfolio-rcskin.vercel.app/" target="blank"> - Web developer </a></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;