import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Helmet from "../component/common/Helmet";

import FooterTwo from "../component/footer/FooterTwo";
import HeaderThree from "../component/header/HeaderThree";
import BlogContent from "../elements/blog/BlogContent";
import ServiceList from "../elements/service/ServiceList";
import TabTwo from "../elements/tab/TabTwo";

import about from "../assets/images/about/about-8.jpg";
import contactImg from "../assets/images/about/about-9.jpg";
import WordEffect1 from "../component/common/WordEffect";
import MagneticButton from "../component/magnetic/MagneticButton"; // adjust path as needed
import Contact from "../elements/Contact";
import { useState } from 'react';
import SkillMapModal from "../component/SkillMapModal"; // update path if needed


import PortfolioWithCategoryTabs from "./Portfolio"; // if you renamed Portfolio.jsx to act as category tabs
import { PortfolioListContent } from "../data/portfolio/PortfolioListContent";




const SlideList = [
  {
    textPosition: "text-left",
    category: "Welcome to my page!",
    buttonText: "Download CV",
    buttonLink: "/cv.pdf", // Place your cv.pdf in the public folder
  },
];
const PortfolioLanding = () => {
  let title = "David Dostál",
    subtitle = "Aspiring IT student, highly motivated to become a future IT professional.",
    description =
      "Ever since high school, I wanted to be educated in as many fields as possible, so that I can view the world from different perspectives. This approach has continuously helped me strengthen my problem-solving skills. I am under belief that the proven orthodox solution may not always be the most effective one and that there is always space for improvement. My passion for staying up to date with the latest technologies also ensures, that my work attitude stays agile and fresh. I am eager to join an organization where I can continue to grow and make a significant impact.";
  const PostList = BlogContent.slice(0, 3);
  const [isSkillMapOpen, setIsSkillMapOpen] = useState(false);

  return (
    <div className="active-dark">
      <Helmet pageTitle="David Dostál | Webpage" />

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      {/* Start Slider Area   */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      <h1 className="title  animationtext slide">
                        Hi, I’m David Dostál <br />
                        <WordEffect1
                          strings={[
                            "Software Developer.",
                            "Frontend Developer.",
                            "Backend Developer.",
                            "Mobile App Developer.",
                            "Database Designer.",
                            "UI/UX Designer.",
                            "Tester (Manual & E2E).",
                            "Enterprise App Developer.",
                            "Tech and AI Enthusiast."
                          ]}
                        />
                      </h1>
                      <h2>based in Czechia.</h2>

                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-primary-color"
                            href={`${value.buttonLink}`}
                            download
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

{/* Start About Area */}
<div id="about" className="fix">
  <div className="about-area ptb--120 bg_color--1">
    <div className="about-wrapper">
      <div className="container">
        <div className="row row--35 align-items-start">
          {/* Left Side: Name, Title, Description */}
          <div className="col-lg-5 col-md-6 col-12">
            <div className="about-inner inner">
              <div className="section-title">
                <h2 className="title">{title}</h2>
                <p className="subtitle subtitle-custom" dangerouslySetInnerHTML={{ __html: subtitle }} />
                <p className="description" dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
          </div>

          {/* Right Side: Skills/Experience Tabs */}
          <div className="col-lg-7 col-md-6 col-12">
            <div className="about-inner inner">
              <div className="row mt--30">
                <TabTwo tabStyle="tab-style--1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* End About Area */}


      {/* Start Service Area  */}
      <div id="service" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">My Services</h2>
                  <p>
                    As a passionate and adaptable IT enthusiast, I offer a growing range of services. I am always eager to take on new challenges and expand my skill set to deliver effective solutions.
                  </p>


                  <MagneticButton onClick={() => setIsSkillMapOpen(true)}>
                    Show Skill Map
                  </MagneticButton>

                  <SkillMapModal isOpen={isSkillMapOpen} onClose={() => setIsSkillMapOpen(false)} />




                </div>

              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                  onServiceClick={() => setIsSkillMapOpen(true)} // pass click handler
                />

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">My Projects</h2>
                    <p>
                      A showcase of my most recent projects, demonstrating my skills across the full spectrum of development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
<PortfolioWithCategoryTabs
  styevariation="text-center mt--40"
  column="col-lg-4 col-md-6 col-sm-6 col-12"
  item="6"
  projects={PortfolioListContent}
/>

              </div>

            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}




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
      {/* End Back To Top */}
    </div>
  );
};

export default PortfolioLanding;
