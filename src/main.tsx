import { app } from 'hyperapp'
import { location } from '@hyperapp/router'
import { Actions, State } from '@app/types'
import { actions, state, view } from '@app/app'

const main = app<State, Actions>(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)

// Firebase App is always required and must be first
import firebase from 'firebase/app'

// Add additional services that you want to use
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyABP-KuAtp-3AJnBl7qkVCO624vIBEPbqU',
  authDomain: 'outfit-perfeito.firebaseapp.com',
  databaseURL: 'https://outfit-perfeito.firebaseio.com',
  projectId: 'outfit-perfeito',
  storageBucket: 'outfit-perfeito.appspot.com',
  messagingSenderId: '584371021851'
}
firebase.initializeApp(config)

const firebaseAuthProvider = new firebase.auth.GoogleAuthProvider()
