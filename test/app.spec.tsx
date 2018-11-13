import { app, h, View } from 'hyperapp'
import { location } from "@hyperapp/router"
import { Actions, State } from '../src/types'
import { actions, state } from '../src/app'
import { NavbarComponent } from '../src/components/navbar'

const myState: State = { logged: { isLoggedIn: false }, location: location.state }

test('state should be defined', () => {
  expect(state).toBeTruthy()
  expect(state).toEqual(expect.objectContaining(myState))
})

function equalTo (expected: string, done: Function) {
  expect(document.body.innerHTML).toBe(expected)
  done()
}

test('debouncing', (done: Function) => {
  const view: View<State, Actions> = (state, actions) => (
    <main oncreate={() => equalTo('<main><h1>1</h1></main>', done)}>
      <h1>{1}</h1>
    </main>
  )

  app<State, Actions>(state, actions, view, document.body)
})

test('returning null from a component', (done) => {
  const NullComponent = () => null

  const view = () => (
    <div
      oncreate={() => {
        expect(document.body.innerHTML).toBe('<div></div>')
        done()
      }}
    >
      <NullComponent />
    </div>
  )

  app(null, {}, view, document.body)
})
