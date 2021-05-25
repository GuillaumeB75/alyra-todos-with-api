import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Account' component={Login} />
      <Redirect to='/' />
    </Switch>
  )
}

export default App