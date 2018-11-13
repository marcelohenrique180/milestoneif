import { ActionsType, h, View } from 'hyperapp'
import { Route, Switch, location } from "@hyperapp/router"
import { Actions, State } from '@app/types'
import { Store } from '@app/store'
import { NavbarComponent as Navbar } from '@components/navbar'
import '@styles/style.scss'

export const state: State = Store.state
export const actions: ActionsType<State, Actions> = Store.actions

const Home = () => <h2>Home</h2>
const Login = () => <h2>Login</h2>

export const view: View<State, Actions> = (state, actions) => (
  <main>
    <Navbar {...state} />
    <Switch>
      <Route path="/" render={Home} />
      <Route path="/login" render={Login} />
    </Switch>
  </main>
)
