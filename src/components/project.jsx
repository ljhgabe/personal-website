import React from "react";

//import stock
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";
import bertParsCit from "../img/bert-logo.png"
import sochedule from "../img/sochedule.png"
import osic from "../img/osic.png"
import learn from "../img/learning.png"

class Portfolio extends React.Component {
  render() {
    return (
        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Project Gallary</h3>
                  <p className="subtitle-a">
                    Here are some projects that I have done during my undergraduate study.
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="work-box">
                  <a href="https://github.com/ljhgabe/BERT-ParsCit" target="_blank">
                    <div className="work-img">
                      <img src={bertParsCit} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">BertParsCit</h2>
                          <div className="w-more">
                          <span className="w-ctegory">
                            Python, PyTorch Lightning, Transformers, Natural Language Processing
                          </span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a href="https://github.com/ljhgabe/SoChedule" target="_blank">
                    <div className="work-img">
                      <img src={sochedule} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">SoChedule</h2>
                          <div className="w-more">
                          <span className="w-ctegory">
                            Java, JavaFX
                          </span>{" "}
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a href="https://github.com/ljhgabe/OSIC-Pulmonary-Fibrosis-Progression-Prediction" target="_blank">
                    <div className="work-img">
                      <img src={pip} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">OSIC-Pulmonary-Fibrosis-Progression-Prediction</h2>
                          <div className="w-more">
                          <span className="w-ctegory">
                            Python, Tensorflow, Pandas, Computer Vision
                          </span>
                            {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a href="https://github.com/ljhgabe" target="_blank">
                    <div className="work-img">
                      <img src={learn} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">To Be Updated</h2>
                          <div className="w-more">
                            <span className="w-ctegory">More Projects Coming</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                      href={stock1}
                      data-lightbox="gallery-smth"
                      style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                      href={stock2}
                      data-lightbox="gallery-smth"
                      style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                      href={stock3}
                      data-lightbox="gallery-smth"
                      style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                      href={stock4}
                      data-lightbox="gallery-smth"
                      style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                      href={stock5}
                      data-lightbox="gallery-smth"
                      style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Portfolio;
