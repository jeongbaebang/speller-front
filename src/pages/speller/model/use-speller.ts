import { useReducer } from 'react'

interface State {
  text: string
  characterCount: number
  isStrongCheck: boolean
}

type Action =
  | { type: 'SET_TEXT'; payload: string }
  | { type: 'SET_STRONG_CHECK'; payload: boolean }

const initialState: State = {
  text: '',
  characterCount: 0,
  isStrongCheck: false,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        text: action.payload,
        characterCount: action.payload.length,
      }
    case 'SET_STRONG_CHECK':
      return {
        ...state,
        isStrongCheck: action.payload,
      }
    default:
      return state
  }
}

const useSpeller = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleTextChange = (value: string) => {
    dispatch({ type: 'SET_TEXT', payload: value })
  }

  const setIsStrongCheck = (value: boolean) => {
    dispatch({ type: 'SET_STRONG_CHECK', payload: value })
  }

  return {
    ...state,
    handleTextChange,
    setIsStrongCheck,
  }
}

export default useSpeller
