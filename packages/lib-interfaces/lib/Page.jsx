// ----------------------------------------------------------------------- Imports
import React, { PropTypes } from 'react';
import { useSheet, classNames } from 'meteor/lib-utilss';
import { Link } from 'react-router';
import { jQuery as $ } from 'meteor/jquery';

// ----------------------------------------------------------------------- Component JSS Stylesheet
const stylesheet = {
  x1: {
    backgroundImage: "url('img/cover.jpg')",
    opacity: 1,
  },
};

// ----------------------------------------------------------------------- Component
/**
 * @summary Homepage
 * @returns {object} Renders a DOM Object
 */
class Page extends React.Component {

  // eslint-disable-next-line require-jsdoc, no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      motionVectors: {
        y: -100,
      },
    };
  }

  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    
  }
  
  // eslint-disable-next-line require-jsdoc
  render() {
    
    const classes = this.props.sheet.classes;
    console.log(this.props.params.pressPageID);

    return (
      <div>

        <section className="page-title page-title-2 image-bg overlay parallax">
          <div className={classNames('background-image-holder', classes.x1)}>
            <img alt="Post" className="background-image" src="http://localhost:8000/img/cover.jpg" />
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1">
                <div className="post-snippet mb64">
                  <div className="post-title">
                    <h4 className="inline-block">A simple image post for starters</h4>
                  </div>
                  <hr />
                  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                  <section className="cd-container" id="cd-timeline">
                    
                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-picture">
                        <img alt="X!@#" src="img/cd-icon-picture.svg" />
                      </div>
                      <div className="cd-timeline-content">
                        <h2>Title of section 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                      </div>
                    </div>

                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-picture">
                        <img alt="X!@#" src="img/cd-icon-picture.svg" />
                      </div>
                      <div className="cd-timeline-content">
                        <h2>Title of section 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                      </div>
                    </div>

                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-picture">
                        <img alt="X!@#" src="img/cd-icon-picture.svg" />
                      </div>
                      <div className="cd-timeline-content">
                        <h2>Title of section 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                      </div>
                    </div>

                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-picture">
                        <img alt="X!@#" src="img/cd-icon-picture.svg" />
                      </div>
                      <div className="cd-timeline-content">
                        <h2>Title of section 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                      </div>
                    </div>

                  </section>

                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.element,
  sheet: React.PropTypes.shape({
    classes: PropTypes.object,
  }),
  params: React.PropTypes.shape({
    pressPageID: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }),
};

// ----------------------------------------------------------------------- Export
export default useSheet(Page, stylesheet);
