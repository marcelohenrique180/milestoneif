import { LocationActions, LocationState } from '@hyperapp/router'

export interface State {
  location: LocationState,
  logged: Logged
}

export interface Actions {
  location: LocationActions,
  login (username: string, pass: string): State
  register (username: string, pass: string): State
  logout (): State
}

export interface Label {
  label: number | string
}

export interface Button extends Label {
  disabled?: boolean
  action (): State
}

export interface Logged {
  isLoggedIn: boolean
}

export interface Navbar {
  logged: Logged,
}

// export interface Counter extends Actions, Label {}
