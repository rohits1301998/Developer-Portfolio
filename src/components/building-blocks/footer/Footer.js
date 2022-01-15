import React from 'react';
import './Footer.scss';
import ScrollSpy from 'react-scrollspy-navigation';

export class Footer extends React.Component {



    render() {
        return (
            <footer className='footer d-flex align-items-center justify-content-center position-relative'>
                <strong className='text-capitalize my-name'>Rohit Singh</strong>
                <span className='mx-1'>&copy;</span>
                <span className='year'>2022</span>
                <span className='mx-1'> | </span>
                <span>All Rights Reserved</span>

                <ScrollSpy duration={2000} offsetTop={48}>
                  <a href="#me" ref={React.createRef()} className="rounded-circle btn btn-direction bg-secondary go-up">
                    <i className="mdi mdi-arrow-up fs-4"></i>
                  </a>
                  <a href="#me" ref={React.createRef()} className="d-none rounded-circle btn btn-direction bg-secondary go-up">
                    <i className="mdi mdi-arrow-up fs-4"></i>
                  </a>
                </ScrollSpy>

            </footer>
        );
    }


}