// --------------------------------------------------------------------- Import stuff & Make Routes

// ----------------------------------------------------------------------- Child Routes
import Page from './Page.jsx';

const childRoutes = [
  
  // Exile Story
  { path: 'exile', component: Page },
  { path: 'democracy', component: Page },
];

// ----------------------------------------------------------------------- Root Route
import App from './startup/App.jsx';
import Homepage from './startup/Homepage.jsx';
const rootRoute = {
  path: '/',
  component: App,
  indexRoute: { component: Homepage },
  childRoutes,
};

// ----------------------------------------------------------------------- Export stuff
export const thisPackage = 'lib-interfaces';
export { rootRoute };
