import Index from './views/Index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './views/NotFound';
import Join from './views/Join'
import Loading from './views/Loading'
import Events from './views/Events'

function App() {
  return (
    <>
      <Router>
        <Loading />
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/join' component={Join} />
          <Route path='/events' component={Events}/>
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
