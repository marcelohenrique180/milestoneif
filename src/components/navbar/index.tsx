import { Component, h } from 'hyperapp'
import { Link } from "@hyperapp/router"
import { Navbar, Button } from '@app/types'
import './style.scss'

export const Logo: Component<{}> = () => (
  <img src="https://github.com/paulasevero/outfit-perfeito/raw/master/assets/logotxt.png"></img>
)

export const NavbarComponent: Component<Navbar> = ({ logged: { isLoggedIn }}) => (
  <nav className="nav">
    <Link to="/register">Registrar-se</Link>
    <Logo />
    { isLoggedIn ?
      <Link to="/logout">Logout</Link>
      :
      <Link to="/login">Login</Link>
    }
  </nav>
)
