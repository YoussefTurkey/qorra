import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sign from '../components/Registeration/Sign'
import Login from '../components/Registeration/Login'

const Join = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/join/sign' component={Sign} />
          <Route path='/join/login' component={Login} />
        </Switch>
      </Router>
    </>
  )
}

export default Join