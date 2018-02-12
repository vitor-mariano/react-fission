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
      <header styleName="navbar">
        <div styleName="navbar__fixed">
          <Link
            styleName="brand"
            to="/"
            href="/"
          >
            <img
              alt="React Fission"
              styleName="brand__icon"
              src="images/logo.svg"
            />
            <h1 styleName="brand__text">React Fission</h1>
          </Link>
          <button
            className="hidden-md-up"
            onClick={() => this.toggleMenu()}
            styleName="navbar__toggle-button"
            type="button"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
        <nav
          styleName={
            RS.classes({
              navbar__menu: true,
              'navbar__menu--open': this.state.menuSwitch === true,
              'navbar__menu--close': this.state.menuSwitch === false,
            })
          }
        >
          <ul styleName="main-menu">
            <li styleName="main-menu__item">
              <Link
                styleName="main-menu__link"
                href="/"
                to="/"
              >
                <FormattedMessage id="home.menu_title" />
              </Link>
            </li>
            <li styleName="main-menu__item">
              <Link
                styleName="main-menu__link"
                href="/todos"
                to="/todos"
              >
                <FormattedMessage id="todos.menu_title" />
              </Link>
            </li>
            <li styleName="main-menu__item">
              <Link
                styleName="main-menu__link"
                href="/profile"
                to="/profile"
              >
                <FormattedMessage id="profile.menu_title" />
              </Link>
            </li>
            <li styleName="main-menu__item">
              <a
                styleName="main-menu__link"
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
