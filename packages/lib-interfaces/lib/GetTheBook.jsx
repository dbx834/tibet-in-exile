// ----------------------------------------------------------------------- Imports
import React, { PropTypes } from 'react';
import { useSheet, classNames } from 'meteor/lib-utilss';
import { Link } from 'react-router';
import { jQuery as $ } from 'meteor/jquery';

// ----------------------------------------------------------------------- Component JSS Stylesheet
const stylesheet = {

};

// ----------------------------------------------------------------------- Component
/**
 * @summary Homepage
 * @returns {object} Renders a DOM Object
 */
class GetTheBook extends React.Component {

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
    console.log(this.props.params.pressPageID);

    return (
      <div>

        <h1>Get The Book</h1>
        
      </div>
    );
  }
}

GetTheBook.propTypes = {
  children: PropTypes.element,
  sheet: React.PropTypes.shape({
    classes: PropTypes.object,
  }),
};

// ----------------------------------------------------------------------- Export
export default useSheet(GetTheBook, stylesheet);
