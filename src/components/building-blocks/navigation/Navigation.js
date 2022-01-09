import React from 'react';
import './Navigation.scss';
import ScrollSpy from 'react-scrollspy-navigation';

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.tabs = this.props.tabs;
  }

  render() {
    return (
      <>
        <nav className="bg-white">
          <div className="row align-items-center h-100">
            <div className="col-lg-3 col-md-3 align-items-center d-flex">
              <strong className="mx-3">
                <span className="name-brand">Rohit</span>
                <span className="name-brand text-primary">Singh</span>
              </strong>
            </div>
            <div className="col-lg-9 col-md-9 align-items-center nav-container d-flex justify-content-center">
              <ScrollSpy duration={2000} offsetTop={48} className="active-tab">
                {this.tabs.map((t) => (
                  <a key={t.id} className="nav-tab text-dark mx-3 text-uppercase" ref={React.createRef()} href={`#` + t.id}>
                    {t.label}
                  </a>
                ))}
              </ScrollSpy>
            </div>
          </div>
        </nav>
        <div className="ghost-nav"></div>
      </>
    );
  }
}
