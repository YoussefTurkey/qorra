import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Arabisk from './EventsPage/posts/Arabisk'
import Tegara from './EventsPage/posts/Tegara'
import Qaseda from './EventsPage/posts/ByetQaseda'
import DarkMood from './DarkMood'
import BackToHome from './EventsPage/BackToHome'

const Events = () => {
  return (
    <>
        <Router>
            <Switch>
                <Route path='/events/arabisk' component={Arabisk} />
                <Route path='/events/tegara' component={Tegara} />
                <Route path='/events/qaseda' component={Qaseda} />
            </Switch>
        </Router>

        <BackToHome />
        <DarkMood />
    </>
  )
}

export default Events