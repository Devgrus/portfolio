import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

import './App.scss';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter basename={process.env.PUBLIC_URL}>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/projects" component={Projects} />
//         <Route exact path="/contact" component={Contact} />
//       </BrowserRouter>
//     </div>
//   );
// }

const App = () => {
  const mainRoutes = {
    path: '/',
    element: <Home />,
  };

  const projectRoutes = {
    path: '/projects',
    element: <Projects />,
  };

  const contactRoutes = {
    path: '/contact',
    element: <Contact />,
  };

  const routing = useRoutes([mainRoutes, projectRoutes, contactRoutes]);
  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;
