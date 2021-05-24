import { Switch, Route, Redirect } from 'react-router-dom'
import Account from './pages/Account'
import Home from './pages/Home'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Account' component={Account} />
      <Redirect to='/' />
    </Switch>
  )
}

export default App