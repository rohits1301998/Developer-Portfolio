import React from "react";
import "./IntroBlock.scss";
import { CacheableImage, Section } from "@components/core";
import ScrollSpy from "react-scrollspy-navigation";

export class IntroBlock extends React.Component {
  render() {
    return (
      <Section id="me" key="me">
        <div className="intro-wrapper position-relative d-flex flex-column justify-content-center">
          <div className="intro-container row py-0">
            <div className="col-lg-6 col-12">
              <div className="d-flex justify-content-center">
                <div className="rounded-circle profile-picture">
                  <CacheableImage src="/images/rohit.jpg" alt="rohit" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex flex-column">
              <div className="intro-container__job-title">
                <div>Web</div>
                <div>Developer</div>
              </div>

              <div className="intro-container__job-description">
                <p className="text-muted">
                  Just another passionate<span className="text-secondary"> developer </span>
                  who is exploring the binary world using a skill named
                  <span className="text-secondary"> curiosity</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center w-100 know-more-wrapper mt-md-5">
            <ScrollSpy duration={2000} offsetTop={48}>
              <a
                href="#priorities"
                ref={React.createRef()}
                className="rounded-circle btn btn-direction know-more-btn"
              >
                <i className="mdi mdi-arrow-down fs-3"></i>
              </a>
              <a
                href="#priorities1"
                ref={React.createRef()}
                className="rounded-circle btn btn-direction p-1 d-none"
              >
                <i className="mdi mdi-arrow-down fs-1"></i>
              </a>
            </ScrollSpy>
          </div>
        </div>
      </Section>
    );
  }
}

export default IntroBlock;
