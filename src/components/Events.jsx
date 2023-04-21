import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from './EventsPage/posts/post'
import DarkMood from './DarkMood'
import BackToHome from './EventsPage/BackToHome'

const Events = () => {
  return (
    <>
        <Router>
            <Switch>
                <Route path='/events/post' component={Post} />
            </Switch>
        </Router>

        <BackToHome />
        <DarkMood />
    </>
  )
}

export default Events