import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Experience extends React.Component {
    constructor() {
        super();
        this.state = {
            experience: [
                {id: 1,
                company: "PayPal", 
                title: "Software Engineer Intern", 
                Responsibility: "", 
                Date:"2021 Jan - 2021 July"},
                {id: 2,
                company: "NUS Ubicomp Lab", 
                title: "Research Intern", 
                Responsibility: "", 
                Date:"2020 Dec - 2022 May"},
                {id: 3,
                company: "Agoda", 
                title: "Data Science and Machine Learning Intern", 
                Responsibility: "", 
                Date:"2022 Aug - Present"},
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
                                    <div className="box-shadow-full">
                                    <div><b>Company:</b> {experience.company} </div>
                                    <div><b>Title:</b> {experience.title} </div>
                                    <div><b>Responsibility:</b></div>
                                    <div>{experience.Responsibility}</div>
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
