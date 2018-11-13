import { Component, h } from 'hyperapp'
import { Link } from '@hyperapp/router'
import { Button, Navbar } from '@app/types'
import './style.scss'

export const Logo: Component<{}> = () => (
  <Link to='/'>
    <img src='https://github.com/paulasevero/outfit-perfeito/raw/master/assets/logotxt.png'></img>
  </Link>
)

export const NavbarComponent: Component<Navbar> = ({ logged: { isLoggedIn } }) => (
  <nav className='nav'>
    <Link to='/register'>Registrar-se</Link>
    <Logo />
    { isLoggedIn ?
      <Link to='/logout'>Logout</Link>
      :
      <Link to='/login'>Login</Link>
    }
  </nav>
)
