import React from "react";
import myImage from "../img/aida.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is pronounced Ida. I have spent over 30 years in the healthcare field as a registered and licensed occupational therapist who  specialized in hand therapy. As a second career  I am currently in a boot camp program from trilogy through Michigan State University. a At the completion  of this bootcamp January 19th 2022 I will have earned a certification as a Full Stack Web Developer. I have several transferable skills which include, however not limited to, the following.",
        },
        {
          id: "second-p-about",
          content:"LIST ITEM 1"
        },
        {
          id: "third-p-about",
          content:"LIST ITEM 2"
        },
        {
          id: "third-p-about",
          content:"LIST ITEM 3"
        },
        {
          id: "third-p-about",
          content:"LIST ITEM 4"
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
                  <div className="col-md-4">
                   <img src={myImage} alt="profile avatar" className="aidaImage"/>
                    
                  </div>

                  
                  <div className="col-md-8">
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
