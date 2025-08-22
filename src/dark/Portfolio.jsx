import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { PortfolioListContent } from "../data/portfolio/PortfolioListContent";
import { categories } from "../data/portfolio/categories";
import Slider from "react-slick";
import { slickDot } from "./script";
import "../dark/Portfolio.css";
import "../assets/css/dual-ball-loader.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: categories[0],
      loading: false, // Initial loading state
    };
    this.tagRefs = [];
  }

  scrollTagsLeft = (i) => {
    if (this.tagRefs[i]) {
      this.tagRefs[i].scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  scrollTagsRight = (i) => {
    if (this.tagRefs[i]) {
      this.tagRefs[i].scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  timeoutId = null;

  handleTabSelect = (index) => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.setState({ loading: true, selectedCategory: categories[index] });
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: false });
      this.timeoutId = null;
    }, 700);
  };

  render() {
    const { column, styevariation } = this.props;
    const { loading } = this.state;

    return (
      <Tabs
        onSelect={this.handleTabSelect}
        selectedIndex={categories.indexOf(this.state.selectedCategory)}
      >
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="tablist-inner">
              <TabList className="pv-tab-button text-center mt--0">
                {categories.map((cat) => (
                  <Tab key={cat}>
                    <span>{cat}</span>
                  </Tab>
                ))}
              </TabList>
            </div>
          </div>
        </div>

        {this.state.loading ? (
          <div
            style={{
              width: 200,
              height: 200,
              textAlign: "center",
              margin: "40px auto",
            }}
          >
            <div
              className="loadingio-spinner-dual-ball-2by998twmg8"
              style={{
                width: 200,
                height: 200,
                background: "transparent",
              }}
            >
              <div className="ldio-yzaezf3dcmj">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          categories.map((cat) => {
            const filtered =
              cat === "All Projects"
                ? PortfolioListContent
                : PortfolioListContent.filter(
                    (project) =>
                      project.category?.trim().toLowerCase() ===
                      cat.trim().toLowerCase()
                  );

            return (
              <TabPanel key={cat}>
                <div className="portfolio-area pt--90 pb--140 bg_color--1">
                  <div className="rn-slick-dot">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="slick-space-gutter--15 slickdot--20">
                            <Slider {...slickDot}>
                              {filtered.map((value, index) => (
                                <div className="portfolio" key={index}>
                                  <div className="thumbnail-inner">
                                    <img
                                      className="thumbnail"
                                      src={value.image}
                                      alt={value.title}
                                    />
                                    <img
                                      className="bg-blr-image"
                                      src={value.image}
                                      alt={value.title + " blurred"}
                                    />
                                  </div>
                                  <div className="content">
  <div className="portfolio-card-bottom">
                                      <p>{value.category}</p>
                                      <h4>
                                        <a
                                          href={value.github}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {value.title}
                                        </a>
                                      </h4>
                                      {value.description && (
                                        <p className="project-details">
                                          {value.description}
                                        </p>
                                      )}
                                      {value.tags && (
                                        <div className="tag-scroll-wrapper project-details">
                                          <button
                                            className="scroll-btn left"
                                            onClick={() => this.scrollTagsLeft(index)}
                                          >
                                            ‹
                                          </button>
                                          <ul
                                            className="project-tags-scroll"
                                            ref={(el) => (this.tagRefs[index] = el)}
                                          >
                                            {value.tags.map((tag, i) => (
                                              <li key={i}>{tag}</li>
                                            ))}
                                          </ul>
                                          <button
                                            className="scroll-btn right"
                                            onClick={() => this.scrollTagsRight(index)}
                                          >
                                            ›
                                          </button>
                                        </div>
                                      )}
                                      <div className="portfolio-button">
                                        <a
                                          className="rn-btn "
                                          href={value.github}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          View on GitHub
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </Slider>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            );
          })
        )}
      </Tabs>
    );
  }
}

export default Portfolio;
