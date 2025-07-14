import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      tab3 = "Experience",
      tab4 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

<TabPanel>
  <div className="single-tab-content">
    <ul>
      <li>
        <strong>Coding:</strong> Python, TypeScript, Java, Kotlin, C++, Swift
      </li>
      <li>
        <strong>Mobile:</strong> Android (Kotlin, Jetpack Compose), iOS (Swift, SwiftUI)
      </li>
      <li>
        <strong>Frontend:</strong> HTML, CSS, Vue.js, React (learning)
      </li>
      <li>
        <strong>Backend:</strong> Flask, Spring Boot, REST APIs, Microservices, Enterprise App Concepts, Security (OAuth2) 
      </li>
      <li>
        <strong>Design:</strong> Figma, Affinity Designer, Affinity Photo
      </li>
      <li>
        <strong>Database:</strong> Database Design & Modeling, SQL (PostgreSQL, SQLite), NoSQL (MongoDB)
      </li>
      <li>
        <strong>System Design:</strong> UML, Use Case & Class Diagrams, etc. (Enterprise Architect, Oracle Data Modeler)
      </li>
      <li>
        <strong>Testing:</strong> Unit Testing, API Testing, Integration Testing (Cypress), E2E Testing (Cypress)
      </li>
      <li>
        <strong>Tools:</strong> Git, Docker, Docker Compose, MS Office, Documentation, LaTeX
      </li>
      <li>
        <strong>Languages:</strong> English (advanced), German (intermediate)
      </li>
      <li>
        <strong>Miscellaneous:</strong> Driving license (B)
      </li>
    </ul>
  </div>
</TabPanel>



                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            <strong>Salesperson / Warehouseman</strong>{" "}
                            <span>
                              - Smíšené zboží Košíková Dagmar, Vír, ČR
                            </span>
                          </a>
                          01/2015 - Present
                          <br />
                          <span style={{ fontSize: "0.95em" }}>
                            Storage, replenishment, sales, English communication,
                            social site management
                          </span>
                        </li>
                        <li>
                          <a href="/service">
                            <strong>Map Quality Analyst</strong>{" "}
                            <span>- Lionbridge, Vír, ČR</span>
                          </a>
                          01/2020 – 01/2022
                          <br />
                          <span style={{ fontSize: "0.95em" }}>
                            Map data QA, GIS tools, AI projects
                          </span>
                        </li>
                        <li>
                          <a href="/service">
                            <strong>Map Quality Analyst</strong>{" "}
                            <span>- TELUS International, Brno, ČR</span>
                          </a>
                          06/2022 – 06/2024
                          <br />
                          <span style={{ fontSize: "0.95em" }}>
                            Map data QA, GIS tools, AI projects
                          </span>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            <strong>Mendel University in Brno, Czech Republic</strong> - Computer Science
                          </a>
                          2021 – Present
                        </li>
                        <li>
                          <a href="/service">
                            <strong>Jazyková škola AMIGAS, Czech Republic</strong> - Language School
                          </a>
                          Graduated 2020
                        </li>
                        <li>
                          <a href="/service">
                            <strong>Gymnázium Bystřice nad Pernštejnem, Czech Republic</strong> - Grammar School
                          </a>
                          Graduated 2019
                        </li>
                      </ul>
                      <div style={{ marginTop: "1em" }}>
                        <p className="theme-gradient">Certifications & Memberships:</p>
                        <ul>
                          <li><strong>Member of Mensa</strong>                               
                            <span> - IQ certificate available</span>
                            </li>
                          <li>Callan method – C1</li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
