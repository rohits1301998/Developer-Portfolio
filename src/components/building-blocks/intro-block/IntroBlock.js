import React from 'react';
import './IntroBlock.scss';
import { Section } from '@components/core';
import ScrollSpy from 'react-scrollspy-navigation';

export class IntroBlock extends React.Component {
  render() {
    return (
      <Section id="me" key="me">
          <div className='intro-wrapper position-relative'>
            <div className="intro-container row">
              <div className="col-lg-6 col-md-6 d-flex flex-column">
                <div className="intro-container__job-title">
                  <div>Web</div>
                  <div>Developer</div>
                </div>

                <div className="intro-container__job-description">
                  <p className="text-muted">
                    Just another passionate<span className="text-secondary"> full stack developer </span> 
                    who is exploring the binary world using a skill named
                    <span className="text-secondary"> curiosity</span>.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                  <div>
                      <img width="350" height="350" className="rounded-circle profile-picture" src="/assets/images/rohit.jpg" alt="rohit" />
                  </div>
              </div>
            </div>

              <div className='d-flex justify-content-center w-100 position-absolute bottom-0 pb-5'>
                <ScrollSpy duration={2000} offsetTop={48}>
                  <a href="#priorities" ref={React.createRef()} className="rounded-circle know-more-btn p-1">
                    <span className="material-icons-outlined fs-1">expand_more</span>
                  </a>
                  <a href="#priorities1" ref={React.createRef()} className="rounded-circle know-more-btn p-1 d-none">
                    <span className="material-icons-outlined fs-1">expand_more</span>
                  </a>
                </ScrollSpy>
                
            </div>
          </div>      
      </Section>
    );
  }
}

export default IntroBlock;
