import Index from './views/Index';
import We from './views/We'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import Join from './components/Join'
import Loading from './components/Loading'
import Events from './components/Events'
import FormEvent from './components/EventsPage/FormEvent'
import Leaders from './components/leaderPage/Leaders'
import Contact from './views/Contact'
// Leaders-Pages
import Profile from './components/leaderPage/Profile'
import Alaa from './components/leaderPage/leaders/Alaa'
import Aya from './components/leaderPage/leaders/Aya'
import Head from './components/leaderPage/leaders/Head'
import Media from './components/leaderPage/leaders/Media'
import Tahreer from './components/leaderPage/leaders/Tahreer'
import PR from './components/leaderPage/leaders/PR'

function App() {
  return (
    <>
      <Router>
        <Loading />
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/we' component={We} />
          <Route path='/contact' component={Contact} />
          <Route path='/join' component={Join} />
          <Route path='/events' component={Events}/>
          <Route path='/formEvent' component={FormEvent}/>
          <Route path='/leaders' component={Leaders}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/alaa' component={Alaa}/>
          <Route path='/aya' component={Aya}/>
          <Route path='/head' component={Head}/>
          <Route path='/media' component={Media}/>
          <Route path='/tahreer' component={Tahreer}/>
          <Route path='/pr' component={PR}/>
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
