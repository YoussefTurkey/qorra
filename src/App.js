import Index from './views/Index';
import We from './views/We'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import Join from './components/Join'
import Loading from './components/Loading'
import Events from './components/Events'
import FormEvent from './components/EventsPage/FormEvent'
import Leaders from './components/leaderPage/Leaders'
import Profile from './components/leaderPage/Profile'

function App() {
  return (
    <>
      <Router>
        <Loading />
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/we' exact component={We} />
          <Route path='/join' component={Join} />
          <Route path='/events' component={Events}/>
          <Route path='/formEvent' component={FormEvent}/>
          <Route path='/leaders' component={Leaders}/>
          <Route path='/profile' component={Profile}/>
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
