import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './views/Landing'
// import CustomCarousel from './components/CustomCarousel';
// import Background from './components/Background'
import Projects from './views/Projects'
import Resume from './views/Resume'


function App() {
  
  
  return (
    <div className="App" >
      {/* <Background /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/projects">
            <Projects />
            {/* <CustomCarousel /> */}
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
