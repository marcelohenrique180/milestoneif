import { ActionsType, h, View } from 'hyperapp'
import { location, Route, Switch } from '@hyperapp/router'
import { Actions, State } from '@app/types'
import { Store } from '@app/store'
import { NavbarComponent as Navbar } from '@components/navbar'
import '@styles/style.scss'

export const state: State = Store.state
export const actions: ActionsType<State, Actions> = Store.actions

const Home = () => <h2>Home</h2>
const Login = () => <h2>Login</h2>
const Register = () => <h2>Register</h2>

export const view: View<State, Actions> = (state: State, actions: Actions) => (
  <main>
    <Navbar {...state} />
    <Switch>
      <Route path='/' render={Home} />
      <Route path='/login' render={Login} />
      <Route path='/signup' render={Register} />
    </Switch>
  </main>
)
