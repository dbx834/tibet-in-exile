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
  '@media (max-width: 1170px)': {
    slideText: {
      marginBottom: 2,
    },
  },
  '@media (min-width: 1170px)': {
    slideText: {
      marginBottom: 0,
    },
  },
};

// Loads at /exile
const exile = {
  title: 'Into Exile',
  desc: '“It was 17th March when we fled Lhasa. I left the Norbulingka at 10 pm. We had to make it past the Chinese garrison and when we left we didn’t know if we would see the next day. It wasn’t until we reached the top of the Che-la pass that we began to feel out of immediate danger. Local people had brought us horses. We mounted them and then turned to take one last look at Lhasa. Then we left.” - His Holiness the 14th Dalai Lama',
  slides: [
    {
      image: 'exile-a.jpg',
      text: 'His Holiness the Dalai Lama seen on the second horse from the right, three days before coming into exile at Karpo Pass',
      date: 'March 28th, 1959',
    },
    {
      image: 'exile-b.jpg',
      text: 'A short halt in-between the journey with Phala on the left of His Holiness and Har Mander Singh at the extreme right of the photo.',
      date: 'NA',
    },
    {
      image: 'exile-c.jpg',
      text: 'His Holiness reception at Tawang Monastery.',
      date: 'April 5, 1959',
    },
    {
      image: 'exile-d.jpg',
      text: 'His Holiness at Bomdila official reception met by P.N. Menon (former Consul-General of India in Lhasa from 1954 - 1956 ) and Sonam Topgay Kazi (who served as the Interpreter for the Indian Mission in Tibet from 1949 to 1955) send by the Government of India seen on either side of His Holiness.',
      date: 'NA',
    },
    {
      image: 'exile-e.jpg',
      text: 'Guard of honour presented by the commandant, Assam Rifles at the official Bomdila reception.',
      date: 'April 12, 1959',
    },
    {
      image: 'exile-f.jpg',
      text: 'His Holiness wearing a robe for the first time since coming into exile. Welcomed by F. C. Phuken (Deputy Commissioner of Darang, on the right of the Dalai Lama) and K. P. Tripathi (Labour Minister of Assam, holding a traditional Tibetan scarf) at Tezpur. April 18, 1959',
      date: 'April 18, 1959',
    },
    {
      image: 'exile-g.jpg',
      text: 'First press statement of His Holiness in third person denouncing the 17th point agreement made between China and Tibet on May 23, 1951. Speaking to the media on the right is Tibetan Government official Yuthok Jigme Dorje and on the left Surkhang Lhawang Topgyal. Heinrich Harrier reporting for LIFE Magazine seen in the forefront of the photo. April 18, 1959',
      date: 'April 18, 1959',
    },
  ],
};

// Loads at /democracy
const democracy = {
  title: 'Democracy',
  desc: 'Paragraph',
  slides: [
    {
      image: 'exile-a.jpg',
      text: 'Paragraph',
      date: 'Date',
    },
  ],
};

// Loads at /survival
const survival = {
  title: 'Survival',
  desc: 'Paragraph',
  slides: [
    {
      image: 'exile-a.jpg',
      text: 'Paragraph',
      date: 'Date',
    },
  ],
};

// Loads at /settlement
const settlement = {
  title: 'Settlement',
  desc: 'Paragraph',
  slides: [
    {
      image: 'exile-a.jpg',
      text: 'Paragraph',
      date: 'Date',
    },
  ],
};

// Loads at /education
const education = {
  title: 'Education',
  desc: 'Paragraph',
  slides: [
    {
      image: 'exile-a.jpg',
      text: 'Paragraph',
      date: 'Date',
    },
  ],
};

// Loads at /religion
const religion = {
  title: 'Religion',
  desc: 'Paragraph',
  slides: [
    {
      image: 'exile-a.jpg',
      text: 'Paragraph',
      date: 'Date',
    },
  ],
};

// Loads at /culture
const culture = {
  title: 'Culture',
  desc: 'Paragraph',
  slides: [
    {
      image: 'exile-a.jpg',
      text: 'Paragraph',
      date: 'Date',
    },
  ],
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
  }

  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    
  }
  
  // eslint-disable-next-line require-jsdoc
  render() {
    
    const classes = this.props.sheet.classes;
    let looper = {};
    if (this.props.location.pathname === '/exile') {
      looper = exile;
    } else if (this.props.location.pathname === '/democracy') {
      looper = democracy;
    } else if (this.props.location.pathname === '/survival') {
      looper = survival;
    } else if (this.props.location.pathname === '/settlement') {
      looper = settlement;
    } else if (this.props.location.pathname === '/education') {
      looper = education;
    } else if (this.props.location.pathname === '/religion') {
      looper = religion;
    } else if (this.props.location.pathname === '/culture') {
      looper = culture;
    }

    return (
      <div>

        <section className="bg-secondary page-title page-title-2 image-bg overlay parallax">
          <div className={classNames('background-image-holder', classes.x1)}>
            <img alt="Post" className="background-image" src="http://localhost:8000/img/cover.jpg" />
          </div>
        </section>

        <section className="bg-secondary">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1">
                <div className="post-snippet mb64">
                  <div className="post-title">
                    <h3 className="inline-block">{looper.title}</h3>
                  </div>
                  <hr />
                  <p className="lead" style={{ marginBottom: 34 }}>{looper.desc}.</p>

                  <section className="cd-container" id="cd-timeline" style={{ paddingTop: 0 }}>
                    
                    {looper.slides.map((slide, index) => {
                      return (
                        <div className="cd-timeline-block" key={index}>
                          <div className="cd-timeline-img"></div>
                          <div className="cd-timeline-content">
                            <img alt="Post" src={`http://localhost:8000/img/${slide.image}`} />
                            <div style={{ padding: '.625em' }}>
                              <p className={classes.slideText}>{slide.text}</p>
                              <span className="cd-date">{slide.date}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}

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
  location: React.PropTypes.shape({
    pathname: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }),
};

// ----------------------------------------------------------------------- Export
export default useSheet(Page, stylesheet);
