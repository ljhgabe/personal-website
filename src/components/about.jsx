import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [

        { id: "C++_skill", content: "C++", porcentage: "80%", value: "80" },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "PyTorch_skill",
          content: "PyTorch",
          porcentage: "80%",
          value: "80"
        },
        { id: "Java_skill", content: "Java", porcentage: "70%", value: "70" },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "SQL_skill",
          content: "SQL",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "LaTeX_skill",
          content: "LaTeX",
          porcentage: "75%",
          value: "75"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am an undergraduate student studying Applied Mathematics and Computer Science at National University of Singapore. The bar on the left hand side indicates my proficiency in different programming languages / libraries. "
        },
        {
          id: "second-p-about",
          content:
            "I specialize in financial mathematics and machine learning, but I am also genuinely passionate in software development. I have done several projects within the field of quantitative finance, computer vision and natural language processing. Currently I am inclined to deep learning and I want to explore and research more on the area of computer vision / natural language processing. However, I am open to any internship opportunities in Quantitative Research, Algorithm and Software engineer. Please feel free to reach out to me under the contact section."
        },
        {
          id: "third-p-about",
          content:
            "Besides study, I do sports, read, and make beats. "
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
