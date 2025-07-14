import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { PortfolioListContent } from "../data/portfolio/PortfolioListContent";
import { categories } from "../data/portfolio/categories";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import "../dark/Portfolio.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: categories[0],
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

  render() {
    const { column, styevariation } = this.props;

    return (
      <Tabs>
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

        {categories.map((cat) => {
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
                                  <div className={`thumbnail ${value.image}`}></div>
                                  <div className={`bg-blr-image ${value.image}`}></div>
                                </div>
                                <div className="content">
                                  <div className="inner">
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
                                      <p className="project-description">
                                        {value.description}
                                      </p>
                                    )}
                                    {value.tags && (
                                      <div className="tag-scroll-wrapper">
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
                                        className="rn-btn"
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
        })}
      </Tabs>
    );
  }
}

export default Portfolio;
