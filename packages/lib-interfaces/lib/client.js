// --------------------------------------------------------------------- Import stuff & Make Routes


// ----------------------------------------------------------------------- Root Route
import App from './startup/App.jsx';
import Homepage from './startup/Homepage.jsx';
const rootRoute = {
  path: '/',
  component: App,
  indexRoute: { component: Homepage },
};

// ----------------------------------------------------------------------- Export stuff
export const thisPackage = 'lib-interfaces';
export { rootRoute };
