import React from 'react';
import './ContactBlock.scss';
import { Card } from '@components/core';

export class ContactBlock extends React.Component {
  contactPlatforms = [
    {
      id: 'github',
      link: 'https://github.com/rohits1301998',
    },
    {
      id: 'linkedin',
      link: 'https://www.linkedin.com/in/rohit-singh-406542151/',
    },
    {
      id: 'instagram',
      link: 'https://www.instagram.com/rohit_singh40/',
    },
    {
      id: 'twitter',
      link: 'https://twitter.com/imrohits13',
    },
    {
      id: 'gmail',
      link: 'mailto:rohits130198@gmail.com',
    },
  ];

  render() {
    return (
      <div className='my-4'>
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <p className="text-center text-dark fs-5">
            <span>Have something in your mind? </span>
            <span>Let's connect and work on something.</span>
          </p>

          <p>
            <a
              target="_self"
              href="mailto:rohits130198@gmail.com"
              className="btn btn-primary contact-me-btn text-center"
            >
              <span>Contact Me</span>
            </a>
          </p>
        </div>
        <div className="d-flex justify-content-center w-75 mx-auto my-4">
          {this.contactPlatforms.map((p) => (
            <a rel="noreferrer" key={p.id} target="_blank" href={p.link} className="contact-icon-link mx-3">
              <i className={`contact-icon mdi mdi-${p.id} ${p.id}`}></i>
            </a>
          ))}
        </div>
      </div>
    );
  }
}
