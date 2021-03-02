import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send A Message</h5>
                      </div>
                      <div>
                        <form
                          action="https://formspree.io/xdoeonlo"
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                        <a href="https://codepen.io/gerweckevan">
                        <img src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-White-Large.png" alt="codePen" href="" width="90" height="90"/>
                        </a>
                        <a href="https://www.linkedin.com/in/evan-gerweck-8b95b9199/">
                        <img src="data:image/png;base64,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" alt="linkedIn" width="90" height="90"/>
                        </a>
                        <a href="https://github.com/gerweckevan/">
                        <img src="https://p.kindpng.com/picc/s/128-1280192_github-logo-png-github-png-transparent-png.png" alt="github" width="90" height="90"/>
                        </a>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Whether you want to get in touch, talk about a project
                          collaboration, or just say hi, I'd love to hear from
                          you.
                          <br />
                          Simply fill the from and send me an email.
                        </p>
                        <ul class="list-ico">
                                <li><span class="ion-ios-location"></span> 2551 31st st Denver, CO 80216</li>
                                <li><span class="ion-ios-telephone"></span> (719) 964-1021</li>
                                <li><span class="ion-email"></span> gerweckevan@gmail.com</li>
                                </ul>
                      </div>
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
