import { ActionsType } from 'hyperapp'
import { location } from '@hyperapp/router'
import { Actions, State } from '@app/types'

export namespace Store {
  export const state: State = {
    location: location.state,
    logged: {
      isLoggedIn: false
    }
  }

  export const actions: ActionsType<State, Actions> = {
    location: location.actions,
    login: (username: string) => (state: State) => {
      localStorage.setItem('username', username)
      return { logged: { isLoggedIn: true } }
    },
    register: (username: string) => (state: State) => {
      localStorage.setItem('username', username)
      return { logged: { isLoggedIn: true } }
    },
    logout: () => (state: State) => ({ logged: { isLoggedIn: false } })
  }
}
