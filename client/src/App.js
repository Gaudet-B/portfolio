import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './views/Landing'
import Projects from './views/Projects'


function App() {
  
  
  return (
    <div className="App" >
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
