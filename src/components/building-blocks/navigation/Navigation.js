import React from 'react';
import ReactDOM from 'react-dom';
import './Navigation.scss';
import ScrollSpy from 'react-scrollspy-navigation';

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showNavMenus: false };
    this.tabs = this.props.tabs;
    this.menuItems = (
      <>
        <div className="mobile-menus-overlay"></div>
        <div className="mobile-menus">
          <div className="mobile-menus__list">
            <ScrollSpy duration={2000} offsetTop={50} className="active-tab">
              {this.tabs.map((t) => (
                <a
                  onClick={this.toggleNavMenus.bind(this)}
                  key={t.id}
                  className="nav-tab text-dark mx-3 text-uppercase"
                  ref={React.createRef()}
                  href={`#` + t.id}
                >
                  {t.label}
                </a>
              ))}
            </ScrollSpy>
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        <nav className="bg-white">
          <div className="row align-items-center h-100">
            <div className="col align-items-center d-flex">
              <strong className="mx-3">
                <span className="name-brand">Rohit</span>
                <span className="name-brand text-primary">Singh</span>
              </strong>
            </div>

            <div className="col align-items-center nav-container d-flex justify-content-center nav-container-lg">
              <ScrollSpy duration={2000} offsetTop={48} className="active-tab">
                {this.tabs.map((t) => (
                  <a
                    key={t.id}
                    className="nav-tab text-dark mx-3 text-uppercase"
                    ref={React.createRef()}
                    href={`#` + t.id}
                  >
                    {t.label}
                  </a>
                ))}
              </ScrollSpy>
            </div>

            <div className="col nav-container-sm d-none justify-content-end align-items-center">
              <button onClick={this.toggleNavMenus.bind(this)} className="mx-2 bg-white border-0 cursor-pointer">
                <span className="material-icons-outlined fs-1">menu</span>
              </button>
              {this.state.showNavMenus && ReactDOM.createPortal(this.menuItems, document.body)}
            </div>
          </div>
        </nav>
        <div className="ghost-nav"></div>
      </>
    );
  }

  toggleNavMenus() {
    this.setState({
      showNavMenus: !this.state.showNavMenus,
    });
  }
}
