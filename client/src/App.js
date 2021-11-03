import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './views/Landing'
import CustomCarousel from './components/CustomCarousel';
// import Projects from './views/Projects'


function App() {
  
  
  return (
    <div className="App" >
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/projects">
            {/* <Projects /> */}
            <CustomCarousel />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
