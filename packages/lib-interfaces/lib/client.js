// --------------------------------------------------------------------- Import stuff & Make Routes

// ----------------------------------------------------------------------- Child Routes

// Exile Story
import Page from './Page.jsx';

// Other Pages
import Project from './Project.jsx';
import Team from './Team.jsx';
import GetTheBook from './GetTheBook.jsx';
import Contact from './Contact.jsx';

const childRoutes = [
  
  // Exile Story
  { path: 'exile', component: Page },
  { path: 'democracy', component: Page },
  { path: 'survival', component: Page },
  { path: 'settlement', component: Page },
  { path: 'education', component: Page },
  { path: 'religion', component: Page },
  { path: 'culture', component: Page },

  // Other Pages
  { path: 'project', component: Project },
  { path: 'team', component: Team },
  { path: 'get-the-book', component: GetTheBook },
  { path: 'contact', component: Contact },
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
