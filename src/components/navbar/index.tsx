import { Component, h } from 'hyperapp'
import { Link } from '@hyperapp/router'
import { Button, Navbar } from '@app/types'
import { Store } from '@app/store'

import google from '@assets/images/google.svg'
import logout from '@assets/images/logout.svg'
import './style.scss'

import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyABP-KuAtp-3AJnBl7qkVCO624vIBEPbqU',
  authDomain: 'outfit-perfeito.firebaseapp.com',
  databaseURL: 'https://outfit-perfeito.firebaseio.com',
  projectId: 'outfit-perfeito',
  storageBucket: 'outfit-perfeito.appspot.com',
  messagingSenderId: '584371021851'
}
const app = firebase.initializeApp(config)

const provider = new firebase.auth.GoogleAuthProvider()
firebase.auth().useDeviceLanguage()
provider.setCustomParameters({
  'login_hint': 'user@example.com'
})

const signup = (action) =>
firebase.auth().signInWithPopup(provider)
.then((result) => result.user.displayName)
.then(action)
.then(() => {
  document.getElementById('google-auth').style.display = 'none'
  document.getElementById('logout').style.display = ''
})
.catch(console.log)

const Logo: Component<{}> = () => (
  <Link to='/'>
    <img src='https://github.com/paulasevero/outfit-perfeito/raw/master/assets/logotxt.png'></img>
  </Link>
)

const Signup: Component<{Button}> = (action) => (
  <button id='google-auth' onclick={() => signup(action)}>
    <img width={32} src={google} alt='G'></img>
    <span>Acessar</span>
  </button>
)

const xablau = () => {
  document.getElementById('google-auth').style.display = ''
  document.getElementById('logout').style.display = 'none'
}

const Logout: Component<{Button}> = (action) => (
  <button id='logout' onclick={() => xablau()} style='display: none;'>
    <img width={32} src={logout} alt=''></img>
    <span>Sair</span>
  </button>
)

export const NavbarComponent: Component<Navbar> = ({ logged: { isLoggedIn }, login, logout }) => (
  <nav className='nav'>
    {isLoggedIn}
    <Logo />
    <Logout action={ login } />
    <Signup action={ logout } />
  </nav>
)
