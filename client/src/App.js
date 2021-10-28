import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './views/Landing'


function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
