import React from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";

import serviceImage from "../assets/images/service/my-service-map.png"; // <- your big PNG

const ServiceDetails = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Service Details" />

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

      {/* Title Area */}
      <div className="rn-page-title-area pt--120 pb--80 bg_color--5 text-center">
        <div className="container">
          <h2 className="title theme-gradient mb--10">Skill Map</h2>
          <p className="text-white">A visual overview of my technical capabilities</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="rn-service-details ptb--100 bg_color--1">
        <div className="container text-center">
          <img
            src={serviceImage}
            alt="Skill Map"
            className="w-100 max-w-screen-md mx-auto rounded-2xl shadow-2xl"
            style={{ maxWidth: "900px" }}
          />
        </div>
      </div>

      <FooterTwo />

      {/* Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
    </React.Fragment>
  );
};

export default ServiceDetails;
