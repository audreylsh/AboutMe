import {Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  //localhost:3000/favourites
  return (
    <div > 
      <MainNavigation/>
      <Switch>
        <Route path='/' exact>
          <About />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>
        </Switch>
        
    </div>
  );
}

export default App;
