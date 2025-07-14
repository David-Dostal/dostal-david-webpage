import React from "react";
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Helmet from "../component/common/Helmet";

import FooterTwo from "../component/footer/FooterTwo";
import HeaderThree from "../component/header/HeaderThree";

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import contactImg from "../assets/images/about/about-9.jpg";
import serviceImage from "../assets/images/service/my-service-map.png"; // <- your big PNG
import Contact from "../elements/Contact";


const SkillMap = () => {
    return (
        <React.Fragment>
            <Helmet pageTitle="David Dostál | SkillMap" />
            <div className="active-dark">

                <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />


                {/* Title Area */}
                <div className="rn-page-title-area pt--120 ptb--120 pb--80 bg_color--5 text-center">

                    <div className="container">
                        <h2 className="title theme-gradient mb--10">Skill Map</h2>
                        <p className="text-white">A visual overview of my technical capabilities</p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="rn-service-details ptb--20 bg_color--1">
                    <div className="container-fluid text-center px-0">
                        <TransformWrapper>
                            <TransformComponent>
                                <img
                                    src={serviceImage}
                                    alt="Skill Map"
                                    style={{ maxWidth: "100%", width: "100%", height: "auto" }}
                                    className="rounded-2xl shadow-2xl mx-auto d-block"
                                />
                            </TransformComponent>
                        </TransformWrapper>

                    </div>
                </div>



                {/* Start COntact Area */}
                <div id="contact" className="fix">
                    <div className="rn-contact-area ptb--120 bg_color--5">
                        <Contact contactImages={contactImg} contactTitle="Hire Me." />
                    </div>
                </div>
                {/* End COntact Area */}

                <FooterTwo />
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
            </div>

        </React.Fragment>
    );
};

export default SkillMap;
