import React from "react";
import imageOverlay from "../img/modern.png";
import html from "../img/logos/html.svg"
import bs from "../img/logos/bs.svg"
import css from "../img/logos/css.svg"
import express from "../img/logos/express.svg"
import gh from "../img/logos/gh.svg"
import heroku from "../img/logos/heroku.svg"
import js from "../img/logos/js.svg"
import mdb from "../img/logos/mdb.svg"
import node from "../img/logos/node.svg"
import react from "../img/logos/react.svg"
 
class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
          html: html,
          bs:bs,
          css:css,
          express: express,
          gh:gh,
          heroku:heroku,
          js:js,mdb:mdb,
          node:node,
          react:react
        };
      }
  render() {
    return (
      <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: "url(" + imageOverlay + ")" }}>
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col">
                    <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left" style={{ color: "white" }}>Skills</h5>
                    </div>
                    <img
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                        src={this.state.html}
                        alt="logo"
                        style={{ 
                            maxWidth: "80px",
                            margin: "3%", 
                        }}
                    />
                    <img
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                        src={this.state.css}
                        alt="logo"
                        style={{ 
                            maxWidth: "130px",
                            margin: "3%", 
                        }}
                    />
                    <img
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                        src={this.state.js}
                        alt="logo"
                        style={{ 
                            maxWidth: "80px",
                            margin: "3%", 
                        }}
                    />
                    <img
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                        src={this.state.bs}
                        alt="logo"
                        style={{ 
                            maxWidth: "80px",
                            margin: "3%", 
                        }}
                    />
                    <img
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                        src={this.state.node}
                        alt="logo"
                        style={{ 
                            maxWidth: "80px",
                            margin: "3%", 
                        }}
                    />
                    <img
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                        src={this.state.express}
                        alt="logo"
                        style={{ 
                            maxWidth: "160px",
                            margin: "3%", 
                        }}
                    />
                    <img
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                        src={this.state.gh}
                        alt="logo"
                        style={{ 
                            maxWidth: "80px",
                            margin: "3%", 
                        }}
                    />
                    <img
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                        src={this.state.heroku}
                        alt="logo"
                        style={{ 
                            maxWidth: "80px",
                            margin: "3%", 
                        }}
                    />
                    <img
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                        src={this.state.mdb}
                        alt="logo"
                        style={{ 
                            maxWidth: "160px",
                            margin: "3%", 
                        }}
                    />
                    <img
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                        src={this.state.react}
                        alt="logo"
                        style={{ 
                            maxWidth: "80px",
                            margin: "3%", 
                        }}
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
