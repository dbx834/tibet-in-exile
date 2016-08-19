// ----------------------------------------------------------------------- Imports
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { useSheet, classNames } from 'meteor/lib-utilss';
import { jQuery as $ } from 'meteor/jquery';

// ---------------------------------- Global Typographic theme
import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';
const typography = new Typography(kirkhamTheme);
typography.injectStyles();

// ----------------------------------------------------------------------- Component JSS Stylesheet
const stylesheet = {
  
};

// ----------------------------------------------------------------------- Component
/**
 * @summary App
 * @returns {object} Renders a DOM Object
 */
class App extends React.Component {

  // eslint-disable-next-line require-jsdoc, no-useless-constructor
  constructor(props) {
    super(props);
  }

  // eslint-disable-next-line require-jsdoc
  componentDidMount() {

    // Make nav
    $('.fullscreen-nav-toggle').click(function () {
      if (!$('.fullscreen-nav-container').hasClass('show-fullscreen-nav')) {
        $('.fullscreen-nav-container').addClass('show-fullscreen-nav');
        setTimeout(function () {
          $('.fullscreen-nav-container').addClass('fade-fullscreen-nav');
        }, 100);
        $(this).addClass('toggle-icon');
      } else {
        $(this).removeClass('toggle-icon');
        $('.fullscreen-nav-container').removeClass('fade-fullscreen-nav');
        setTimeout(function () {
          $('.fullscreen-nav-container').removeClass('show-fullscreen-nav');
        }, 500);
      }
    });

    $('.fullscreen-nav-container .menu li a').click(function () {
      $('.fullscreen-nav-toggle').removeClass('toggle-icon');
      $('.fullscreen-nav-container').removeClass('fade-fullscreen-nav');
      setTimeout(function () {
        $('.fullscreen-nav-container').removeClass('show-fullscreen-nav');
      }, 500);
    });
  }
  
  // eslint-disable-next-line require-jsdoc
  render() {
    
    const classes = this.props.sheet.classes;

    return (
      <div>
        <main>
          <nav className="fullscreen-nav top-bar overlay-bar">
            <div className="fullscreen-nav-toggle">
              <i className="icon icon_menu"></i>
              <i className="icon icon_close"></i>
            </div>
            <div className="fullscreen-nav-container">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <ul className="menu">
                      <li><Link to="/">Home</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <LocaleProvider locale={enUS}>
            {this.props.children}
          </LocaleProvider>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  sheet: React.PropTypes.shape({
    classes: PropTypes.object,
  }),
};

// ----------------------------------------------------------------------- Export
export default useSheet(App, stylesheet);
