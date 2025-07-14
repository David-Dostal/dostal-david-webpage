import React, { useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FiX } from "react-icons/fi";
import serviceImage from "../assets/images/service/my-service-map.png";
import "./SkillMapModal.css";

const SkillMapModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

const handleOverlayClick = (e) => {
  if (e.target === e.currentTarget) {
    onClose();
  }
};


  return (
    <div className="skillmap-modal-overlay" onClick={handleOverlayClick}>
      <div className="skillmap-modal">
        <button className="close-btn" onClick={onClose} aria-label="Close">
          <FiX />
        </button>
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={4}
          centerOnInit={true}
          centerZoomedOut={true}
          limitToBounds={true}
          panning={{ disabled: false }}
          pinch={{ disabled: false }}
          doubleClick={{ disabled: true }}
        >
          <TransformComponent>
            <img
              src={serviceImage}
              alt="Skill Map"
              className="skillmap-img"
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default SkillMapModal;
