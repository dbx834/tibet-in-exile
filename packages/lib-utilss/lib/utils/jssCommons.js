/**
* To get JSS up and running, I used to include this script. Soon enough, it became tiresome for the
* eyes. So, I decided to create this. This reduces the code it requires to set up JSS
*/
// ----------------------------------------------------------------------- Imports
import jss, {} from 'jss';
import camelCase from 'jss-camel-case';
import vendorPrefixer from 'jss-vendor-prefixer';
import nested from 'jss-nested';
import useSheet from 'react-jss';
import px from 'jss-px';
import classNames from 'classnames';

// ----------------------------------------------------------------------- JSS stuff
jss.use(vendorPrefixer());
jss.use(camelCase());
jss.use(nested());
jss.use(px());

// ----------------------------------------------------------------------- Exports
export { useSheet, classNames };
