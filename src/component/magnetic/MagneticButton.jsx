import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MagneticButton.css";

const MagneticButton = ({ children, to, onClick }) => {
  const fieldRef = useRef(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    field.innerHTML = "";
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
      particle.style.setProperty("--y", `${Math.random() * 200 - 100}px`);
      particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      field.appendChild(particle);
    }
  }, []);

  if (to) {
    // Normal navigation button
    return (
      <Link to={to} className="btn magnetic">
        <span>{children}</span>
        <div className="particles-field" ref={fieldRef}></div>
      </Link>
    );
  }

  // Action button (like open modal)
  return (
    <button className="btn magnetic" onClick={onClick} type="button">
      <span>{children}</span>
      <div className="particles-field" ref={fieldRef}></div>
    </button>
  );
};

export default MagneticButton;
