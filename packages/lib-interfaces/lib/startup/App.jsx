// ----------------------------------------------------------------------- Imports
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { useSheet, classNames } from 'meteor/lib-utilss';
import { jQuery as $ } from 'meteor/jquery';

// ---------------------------------- Global Typographic theme
// import Typography from 'typography';
// import kirkhamTheme from 'typography-theme-kirkham';
// const typography = new Typography(kirkhamTheme);
// typography.injectStyles();

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
    // this.goTo = 
  }

  // eslint-disable-next-line require-jsdoc
  componentDidMount() {

    // Make nav
    if (!$('nav').hasClass('fixed') && !$('nav').hasClass('absolute')) {

      // Make nav container height of nav
      $('.nav-container').css('min-height', $('nav').outerHeight(true));

      $(window).resize(function () {
        $('.nav-container').css('min-height', $('nav').outerHeight(true));
      });

      // Compensate the height of parallax element for inline nav
      if ($(window).width() > 768) {
        $('.parallax:nth-of-type(1) .background-image-holder').css('top', -($('nav').outerHeight(true)));
      }

      // Adjust fullscreen elements
      if ($(window).width() > 768) {
        $('section.fullscreen:nth-of-type(1)').css('height', ($(window).height() - $('nav').outerHeight(true)));
      }

    } else {
      $('body').addClass('nav-is-overlay');
    }

    if ($('nav').hasClass('bg-dark')) {
      $('.nav-container').addClass('bg-dark');
    }


    // Fix nav to top while scrolling
    const mr_nav = $('body .nav-container nav:first');
    mr_navOuterHeight = $('body .nav-container nav:first').outerHeight();
    mr_fixedAt = typeof mr_nav.attr('data-fixed-at') !== typeof undefined ? parseInt(mr_nav.attr('data-fixed-at').replace('px', '')) : parseInt($('section:nth-of-type(1)').outerHeight());
    // window.addEventListener("scroll", updateNav, false);

    // Menu dropdown positioning
    $('.menu > li > ul').each(function() {
      var menu = $(this).offset();
      var farRight = menu.left + $(this).outerWidth(true);
      if (farRight > $(window).width() && !$(this).hasClass('mega-menu')) {
        $(this).addClass('make-right');
      } else if (farRight > $(window).width() && $(this).hasClass('mega-menu')) {
        var isOnScreen = $(window).width() - menu.left;
        var difference = $(this).outerWidth(true) - isOnScreen;
        $(this).css('margin-left', -(difference));
      }
    });

    // Mobile Menu
    $('.mobile-toggle').click(function () {
      $('.nav-bar').toggleClass('nav-open');
      $(this).toggleClass('active');
    });

    $('.menu li').click(function (e) {
      if (!e) e = window.event;
      e.stopPropagation();
      if ($(this).find('ul').length) {
        $(this).toggleClass('toggle-sub');
      } else {
        $(this).parents('.toggle-sub').removeClass('toggle-sub');
      }
    });

    $('.menu li a').click(function () {
      if ($(this).hasClass('inner-link')) {
        $(this).closest('.nav-bar').removeClass('nav-open');
      }
    });

    $('.module.widget-handle').click(function () {
      $(this).toggleClass('toggle-widget-handle');
    });

    $('.search-widget-handle .search-form input').click(function (e) {
      if (!e) e = window.event;
      e.stopPropagation();
    });
  }
  
  // eslint-disable-next-line require-jsdoc
  render() {
    
    // const classes = this.props.sheet.classes;

    return (
      <div>

        {/* Navigation */}
        <div className="nav-container">
          <nav>

            <div className="nav-bar">

              <div className="module left">
                <a href="index.html">
                  <img className="logo logo-light" alt="Tibet In Exile" src="img/logo-light.png" />
                  <img className="logo logo-dark" alt="Tibet In Exile" src="img/logo-dark.png" />
                </a>
              </div>
              
              <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
                <i className="ti-menu"></i>
              </div>

              <div className="module-group right">
                <div className="module left">
                  <ul className="menu">

                    <li className="has-dropdown">
                      <Link to="/about">About</Link>
                      <ul>
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/team">Team</Link></li>
                      </ul>
                    </li>

                    <li className="has-dropdown">
                      <Link to="/exile">Exile Story</Link>
                      <ul>
                        <li><Link to="/exile">Exile</Link></li>
                        <li><Link to="/democracy">Democracy</Link></li>
                        <li><Link to="/survival">Survival</Link></li>
                        <li><Link to="/settlement">Settlement</Link></li>
                        <li><Link to="/education">Education</Link></li>
                        <li><Link to="/religion">Religion</Link></li>
                        <li><Link to="/culture">Culture</Link></li>
                      </ul>
                    </li>
                    
                    <Link to="/get-the-book">Get The Book</Link>
                    <Link to="/contact">Contact</Link>

                  </ul>
                </div>
              </div>

            </div>
          </nav>
        </div>
        {/* /Navigation */}

        <main>

          {/* Main Stuff */}
          <div className="main-container">
            {this.props.children}
          </div>
          {/* //Main Stuff */}

          {/* Footer */}
          <footer className="footer-2 bg-dark pt96 pt-xs-40">
            <div className="container">
              
              <div className="row mb64 mb-xs-24">
                <div className="col-sm-12">
                  <Link to="/">
                    <img className="image-xxs fade-half" alt="Tibet In Exile" src="img/logo-light.png" />
                  </Link>
                </div>
              </div>

              <div className="row mb64 mb-xs-24">
                <div className="col-md-4 col-sm-4">
                  <h6 className="uppercase" style={{ marginBottom: 18 }}>About</h6>
                  <ul>
                    <li><Link to="/project"><h5 className="uppercase mb16 fade-on-hover">Project</h5></Link></li>
                    <li><Link to="/team"><h5 className="uppercase mb16 fade-on-hover">Team</h5></Link></li>
                  </ul>
                  <Link to="/contact"><h5 className="uppercase fade-on-hover" style={{ marginTop: 36, marginBottom: 18 }}>Contact</h5></Link>
                  <Link to="/get-the-book"><h5 className="uppercase fade-on-hover" style={{ marginTop: 36, marginBottom: 18 }}>Get The Book</h5></Link>
                </div>
              
                <div className="col-md-4 col-sm-4">
                  <h6 className="uppercase" style={{ marginBottom: 18 }}>Exile Story</h6>
                  <ul>
                    <li><Link to="/exile"><h5 className="uppercase mb16 fade-on-hover">Exile</h5></Link></li>
                    <li><Link to="/democracy"><h5 className="uppercase mb16 fade-on-hover">Democracy</h5></Link></li>
                    <li><Link to="/survival"><h5 className="uppercase mb16 fade-on-hover">Survival</h5></Link></li>
                    <li><Link to="/settlement"><h5 className="uppercase mb16 fade-on-hover">Settlement</h5></Link></li>
                    <li><Link to="/education"><h5 className="uppercase mb16 fade-on-hover">Education</h5></Link></li>
                    <li><Link to="/religion"><h5 className="uppercase mb16 fade-on-hover">Religion</h5></Link></li>
                    <li><Link to="/culture"><h5 className="uppercase mb16 fade-on-hover">Culture</h5></Link></li>
                  </ul>
                </div>

                <div className="col-md-4 col-sm-4">
                  <h6 className="uppercase" style={{ marginBottom: 18 }}>Social</h6>
                  <ul className="list-inline social-list">
                    <li><Link to="/" target="_blank"><h5 className="uppercase mb16 fade-on-hover"><i className="ti-twitter-alt"></i></h5></Link></li>
                    <li><Link to="/" target="_blank"><h5 className="uppercase mb16 fade-on-hover"><i className="ti-facebook"></i></h5></Link></li>
                  </ul>
                </div>

              </div>
            
              <div className="row fade-half">
                <div className="col-sm-12 text-center">
                  <span>© Copyright 2016 Digital Tibet - All Rights Reserved</span>
                </div>
              </div>
            </div>
          </footer>
          {/* //Footer */}

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
