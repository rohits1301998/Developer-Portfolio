import React from 'react';
import './ContactBlock.scss';

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
      <div className="mx-auto w-75 d-flex flex-column justify-content-evenly my-4">
        <h3 className="text-center text-secondary fs-2">LET'S CONNECT AND WORK ON SOMETHING</h3>
        <div className="d-flex justify-content-center">
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
