import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import GoogleMapReact from "google-map-react";
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <React.Fragment>

        {/* Start Breadcrump Area */}

          <div className="container">
            <div className="row">
              <div className="col-lg-12" >
                <div className="rn-page-title text-center pt--100 bg_color--5">
                  <h2 className="title theme-gradient">Get in touch</h2>
                  <p>
                    Always available for new projects.{" "}
                  </p>
                </div>
              </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Contact Top Area  */}
        <div className="rn-contact-top-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
                <div className="rn-address ">
                  <div className="icon bg_color--1">
                    <FiHeadphones />
                  </div>
                  <div className="inner ">
                    <h4 className="title theme-gradient">Contact With Phone Number</h4>
                    <p>
                      <a href="tel:+420 604 907 101">+420 604 907 101</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                <div className="rn-address">
                  <div className="icon bg_color--1">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title theme-gradient">Email Address</h4>
                    <p>
                      <a href="mailto:david.dostal.1999@gmail.com">david.dostal.1999@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                <div className="rn-address">
                  <div className="icon bg_color--1">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title theme-gradient">Location</h4>
                    <p>
                      Vír, 592 66, Vysočina, Czechia
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}
            </div>
          </div>
        </div>
        {/* End Contact Top Area  */}

                {/* dodelat 
        <div className="rn-contact-page ptb--120 bg_color--1">
          <ContactTwo />
        </div>




        {/* End Contact Page Area  

         Start Contact Map  
        <div className="rn-contact-map-area position-relative">
          <div style={{ height: "650px", width: "100%" }}>
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>
         End Contact Map  

        */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

      </React.Fragment>
    );
  }
}
export default Contact;
