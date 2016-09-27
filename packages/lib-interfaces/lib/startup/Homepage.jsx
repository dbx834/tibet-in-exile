// ----------------------------------------------------------------------- Imports
import React, { PropTypes } from 'react';
import { useSheet, classNames } from 'meteor/lib-utilss';
import { jQuery as $ } from 'meteor/jquery';

// ----------------------------------------------------------------------- Component JSS Stylesheet
const stylesheet = {
  x2: {
    backgroundImage: "url('img/cover.jpg')",
    opacity: 1,
  },
  xImg: {
    marginTop: '14.1%',
    width: '62.50% !important',
  },
};

// ----------------------------------------------------------------------- Component
/**
 * @summary Homepage
 * @returns {object} Renders a DOM Object
 */
class Homepage extends React.Component {

  // eslint-disable-next-line require-jsdoc, no-useless-constructor
  constructor(props) {
    super(props);
  }

  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    // Image Sliders
    if ($('.slider-all-controls, .slider-paging-controls, .slider-arrow-controls, .slider-thumb-controls, .logo-carousel').length) {
      $('.slider-all-controls').flexslider({
        start: function (slider) {
          if (slider.find('.slides li:first-child').find('.fs-vid-background video').length) {
            slider.find('.slides li:first-child').find('.fs-vid-background video').get(0)
            .play();
          }
        },
        after: function (slider) {
          if (slider.find('.fs-vid-background video').length) {
            if (slider.find('li:not(.flex-active-slide)').find('.fs-vid-background video').length) {
              slider.find('li:not(.flex-active-slide)').find('.fs-vid-background video').get(0)
              .pause();
            }
            if (slider.find('.flex-active-slide').find('.fs-vid-background video').length) {
              slider.find('.flex-active-slide').find('.fs-vid-background video').get(0)
              .play();
            }
          }
        },
      });
      $('.slider-paging-controls').flexslider({
        animation: 'slide',
        directionNav: false,
      });
      $('.slider-arrow-controls').flexslider({
        controlNav: false,
      });
      $('.slider-thumb-controls .slides li').each(function () {
        const imgSrc = $(this).find('img').attr('src');
        $(this).attr('data-thumb', imgSrc);
      });
      $('.slider-thumb-controls').flexslider({
        animation: 'slide',
        controlNav: 'thumbnails',
        directionNav: true,
      });
      $('.logo-carousel').flexslider({
        minItems: 1,
        maxItems: 4,
        move: 1,
        itemWidth: 200,
        itemMargin: 0,
        animation: 'slide',
        slideshow: true,
        slideshowSpeed: 3000,
        directionNav: false,
        controlNav: false,
      });
    }
  }
  
  // eslint-disable-next-line require-jsdoc
  render() {
    
    const classes = this.props.sheet.classes;

    return (
      <div>

        {/* Fullscreen Opener */}
        <section className="cover fullscreen image-slider slider-arrow-controls controls-inside parallax">
          <ul className="slides">
            <li className="overlay image-bg">
              <div className={classNames('background-image-holder', classes.x2)}>
                <img alt="Tibet In Exile" className="background-image" src="img/cover.jpg" />
              </div>
              <div className="container v-align-transform">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                    <img alt="Logo" className="image-small mb8" src="img/logo-light-tib.png" />
                    <h6 className="uppercase mb32">The story of tibet in exile</h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* Abstract */}
        <section className="bg-secondary">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1">
                <p className="lead">Following the forced escape of His Holiness the Dalai Lama in March 1959, thousands of Tibetans were forced to flee Tibet, and it was these refugees who formed the early exiled community. This the story of those who were forced into exile.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Introduction */}
        <section style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h3 className="uppercase color-primary mb-xs-24" style={{ marginBottom: 10 }}>Exile Story</h3>
                <hr />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <iframe src="http://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1G_mflF4HYckwoAbbInrP4ePDRI92TruT4YljM91reTU&font=Default&lang=en&initial_zoom=0&height=650" width="100%" height="650" frameBorder="0"></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Project Introduction */}
        <section className="bg-secondary" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h3 className="uppercase color-primary mb-xs-24" style={{ marginBottom: 10 }}>Project</h3>
                <hr />
              </div>
            </div>
          </div>
        </section>

        {/* Slider */}
        <section className="bg-secondary" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="row">
              
              <div className="col-md-6 col-md-push-3 text-center">
                <div className="image-slider slider-paging-controls controls-outside">
                  <ul className="slides">
                    <li className="mb32"><img className={classes.xImg} alt="App" src="img/sl1.png" /></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-md-pull-6">
                <div className="mt80 mt-xs-80 text-right text-left-xs">
                  <h5 className="uppercase bold mb16">Photo Journal</h5>
                  <p className="fade-1-4">Charlie chaplin devilish cad john aldridge crumb catcher, cardinal richelieu devilish cad crumb catcher charlie chaplin soup strainer hold steady keyboardist john aldridge ding-dong cappuccino catcher!</p>
                </div>

                <div className="mt80 mt-xs-0 text-right text-left-xs">
                  <h5 className="uppercase bold mb16">Exclusive Content</h5>
                  <p className="fade-1-4">Charlie chaplin devilish cad john aldridge crumb catcher, cardinal richelieu devilish cad crumb catcher charlie chaplin soup strainer hold steady keyboardist john aldridge ding-dong cappuccino catcher!</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="mt80 mt-xs-0">
                  <h5 className="uppercase bold mb16">Extensive Research</h5>
                  <p className="fade-1-4">Charlie chaplin devilish cad john aldridge crumb catcher, cardinal richelieu devilish cad crumb catcher charlie chaplin soup strainer hold steady keyboardist john aldridge ding-dong cappuccino catcher!</p>
                </div>

                <div className="mt80 mt-xs-0">
                  <h5 className="uppercase bold mb16">Another Project Introduction</h5>
                  <p className="fade-1-4">Charlie chaplin devilish cad john aldridge crumb catcher, cardinal richelieu devilish cad crumb catcher charlie chaplin soup strainer hold steady keyboardist john aldridge ding-dong cappuccino catcher!</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row v-align-children">
              <div className="col-md-4 col-sm-5 mb-xs-24">
                <h3>Get The Book.</h3>
                <p>A paragraph.</p>
              </div>
              <div className="col-md-7 col-md-offset-1 col-sm-6 col-sm-offset-1 text-center">
                <img alt="Screenshot" className="cast-shadow" src="img/cover.jpg" />
              </div>
            </div>
          </div>
        </section>
        
      </div>
    );
  }
}

Homepage.propTypes = {
  children: PropTypes.element,
  sheet: React.PropTypes.shape({
    classes: PropTypes.object,
  }),
};

// ----------------------------------------------------------------------- Export
export default useSheet(Homepage, stylesheet);
