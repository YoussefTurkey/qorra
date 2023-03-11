import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Arabisk from '../components/EventsPage/posts/Arabisk'
import Tegara from '../components/EventsPage/posts/Tegara'
import Qaseda from '../components/EventsPage/posts/ByetQaseda'
import DarkMood from '../components/DarkMood'
import BackToHome from '../components/EventsPage/BackToHome'

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