import React from "react";
import "./stars.scss";
import Image from 'react-image-resizer'
import nus from "../img/nus-logo.png"
import wing from "../img/wing-logo.png"
import astignes from "../img/astignes-logo.png"

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      experience: [
        {id: 1,
          company: "Astignes Capital Asia Pte. Ltd.",
          logo: astignes,
          title: "Quantitative Researcher Intern",
          Responsibility: [
              "Researched and analyzed forex factors based on economic and technical machine learning indicators.",
              "Constructed backtesting pipeline, and optimized factor combinations using pair trading strategy.",
              "Discovered factors that are incorporated into the current forex factor model, with positive impact on the model performance in terms of Sharpe ratio and expected shortfall."
          ],
          Date:"May 2022 – Aug 2022"},
        {id: 2,
          company: "Web Information Retrieval and Natural Language Processing Group@NUS",
          logo: wing,
          title: "Undergraduate Researcher",
          Responsibility: [
              "Researched on topics of transformers based on large-scale synthetic data under supervision of Prof. Kan Min-Yen and Taha Aksu.",
              "Built BERT-ParsCit, which outperform the state-of-the-art model under the task of citation parsing."
          ],
          Date:"Dec 2021 – Jul 2022"},
        {id: 3,
          company: "National University of Singapore",
          logo: nus,
          title: "Teaching Assistant",
          Responsibility: [
            "Tutored CS4243 - Computer Vision in AY22/23 Semester 1.",
            "Conducted weekly lab sessions for 33 students, including graduate students.",
            "Topical Expert in \"Introduction to Deep Learning\" and \"Convolutional Neural Networks\"",
          ],
          Date:"2022 Aug - 2022 Dec"},
      ]
    }
  }
  render() {
    return (
        // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
        <section id="experience" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Work Experience</h3>
                  <p className="subtitle-a">
                    Professional Experience
                  </p>
                </div>
              </div>
              {
                this.state.experience.map(experience => {
                  return (
                      <React.Fragment>
                        <div className="col-sm-12">
                          <div className="box-shadow-full" >

                            <center><Image src={experience.logo} height={100} width={100} style={{ alignSelf: 'center' }}/></center>
                            <div><b>Company:</b> {experience.company} </div>
                            <div><b>Title:</b> {experience.title} </div>
                            <div><b>Responsibility:</b></div>
                            {
                              experience.Responsibility.map(
                                  item => {
                                    return (
                                        <li key="{item}">{item}</li>
                                    );
                                  }
                              )
                            }
                            <div><b>Duration: </b>{experience.Date}</div>
                          </div>
                        </div>
                      </React.Fragment>
                  );})
              }
            </div>
          </div>
        </section>
    );
  }
}

export default Experience;
