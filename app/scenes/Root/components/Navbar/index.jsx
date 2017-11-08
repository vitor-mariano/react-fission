import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import RS from '../../../../lib/reactsauce';
import './styles.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuSwitch: null,
    };
  }

  setMenuSwitch(menuSwitch) {
    this.setState({ menuSwitch });
  }

  toggleMenu() {
    this.setMenuSwitch(!this.state.menuSwitch);
  }

  render() {
    return (
      <header className="navbar">
        <div className="navbar__fixed">
          <Link
            className="brand"
            to="/"
            href="/"
          >
            <img
              alt="React Fission"
              className="brand__icon"
              src="images/logo.svg"
            />
            <h1 className="brand__text">React Fission</h1>
          </Link>
          <button
            className="navbar__toggle-button hidden-md-up"
            onClick={() => this.toggleMenu()}
            type="button"
          >
            <i className="fa fa-bars" />
          </button>
        </div>
        <nav
          className={
            RS.classes({
              navbar__menu: true,
              'navbar__menu--open': this.state.menuSwitch === true,
              'navbar__menu--close': this.state.menuSwitch === false,
            })
          }
        >
          <ul className="main-menu">
            <li className="main-menu__item">
              <Link
                className="main-menu__link"
                href="/"
                to="/"
              >
                <FormattedMessage id="home.menu_title" />
              </Link>
            </li>
            <li className="main-menu__item">
              <Link
                className="main-menu__link"
                href="/todos"
                to="/todos"
              >
                <FormattedMessage id="todos.menu_title" />
              </Link>
            </li>
            <li className="main-menu__item">
              <Link
                className="main-menu__link"
                href="/profile"
                to="/profile"
              >
                <FormattedMessage id="profile.menu_title" />
              </Link>
            </li>
            <li className="main-menu__item">
              <a
                className="main-menu__link"
                href="https://github.com/matheusmariano/react-fission"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
