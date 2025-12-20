import { useReducer } from "react"

export default function useActions(initialState, functions) {
  const [state, dispatch] = useReducer(function reducer(state, action) {
    return functions[action.type](state, action.payload)
  }, initialState)

  const actions = Object.keys(functions).reduce((acc, key) => {
    acc[key] = (payload) => dispatch({ payload, type: key })
    return acc
  }, {})

  return { actions, state }
}
