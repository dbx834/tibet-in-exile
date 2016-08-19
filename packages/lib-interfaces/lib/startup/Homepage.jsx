// ----------------------------------------------------------------------- Imports
import React, { PropTypes } from 'react';
import { useSheet, classNames } from 'meteor/lib-utilss';
import Parallax from 'react-simple-parallax';

// ----------------------------------------------------------------------- Component JSS Stylesheet
const stylesheet = {
  parallax: {
    '& .react-simple-parallax-bg': {
      height: '62.5vh',
      backgroundImage: 'url(/img/bg.jpg)',
    },
    '& div:nth-child(2)': {
      bottom: 6,

      '& h1': {
        color: '#FFFFFF',
        fontWeight: '100',
        paddingRight: 13,
      },
    },
  },
};

// ----------------------------------------------------------------------- Component
const Homepage = (props) => {
  const classes = props.sheet.classes;

  return (
    <div>
      
      <section className={classes.parallax} style={{ padding: 0 }}>
        <Parallax>
          <h1 className="text-xs-right" style={{ margin: 0 }}><i>Tibet in Exile</i></h1>
        </Parallax>
      </section>
      
      <iframe src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1G_mflF4HYckwoAbbInrP4ePDRI92TruT4YljM91reTU&font=Default&lang=en&initial_zoom=2&height=650" width="100%" height="650" frameBorder="0"></iframe>
    </div>
  );
};

Homepage.propTypes = {
  children: PropTypes.element,
  sheet: React.PropTypes.shape({
    classes: PropTypes.object,
  }),
};

// ----------------------------------------------------------------------- Export
export default useSheet(Homepage, stylesheet);
