import React from 'react';
import './ContactBlock.scss';
import { Card } from '@components/core';

export class ContactBlock extends React.Component {
  contactPlatforms = [
    {
      id: 'github',
      link: 'https://github.com/rohits1301998'
    },
    {
      id: 'linkedin',
      link: 'https://www.linkedin.com/in/rohit-singh-406542151/'
    },
    {
      id: 'instagram',
      link: 'https://www.instagram.com/rohit_singh40/'
    },
    {
      id: 'twitter',
      link: 'https://twitter.com/imrohits13'
    },
    {
      id: 'gmail',
      link: 'mailto:rohits130198@gmail.com'
    }
  ];

  render() {
    return (
      <div className="w-100 d-flex flex-column justify-content-evenly my-4">
        <Card
          body={
            <div className='row align-items-center bg-secondary w-100 text-light'>
              <div className='col-lg-4 col-12 d-flex align-items-center justify-content-center'>
                  <p className='fs-2 fw-bolder'>Build Something</p>
              </div>
              <div className='col-lg-4 col-12 d-flex align-items-center justify-content-center'>
                <p className='text-center'>
                  <span>Have something in your mind? </span>
                  <span>Let's connect and work on something.</span>
                </p>
              </div>
              <div className='col-lg-4 col-12 d-flex align-items-center justify-content-center'>
                <p>
                  <a target="_self" href="mailto:rohits130198@gmail.com" className="btn btn-primary contact-me-btn text-center">
                    <span>Contact Me</span>
                  </a>
                </p>
              </div>
            </div>
          }
          hasShadow={true}
          hasPadding={false}
        >
            
        </Card>
        <div className="d-flex justify-content-center w-75 mx-auto my-4">
          {this.contactPlatforms.map((p) => (
            <a rel="noreferrer" key={p.id} target="_blank" href={p.link} className='contact-icon-link mx-3'>
                <i className={`contact-icon mdi mdi-${p.id} ${p.id}`}></i>
            </a>
          ))}
        </div>
      </div>
    );
  }
}
