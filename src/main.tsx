import { app } from 'hyperapp'
import { location } from '@hyperapp/router'
import { Actions, State } from '@app/types'
import { actions, state, view } from '@app/app'

const main = app<State, Actions>(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)
