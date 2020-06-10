import React, { createContext, useReducer } from 'react'
import { SystemReducer } from './reducer'

export interface SystemState {
  nodes: Node[]
  connections: Connection[]
}

export interface Connection {
  from: string
  to: string
}

export interface Node {
  id: string
  name: string
  connections: string[]
  posX: number
  posY: number
  width: number
  height: number
}

const initialState: SystemState = {
  nodes: [],
  connections: []
}

export const SystemContext = createContext<{
  state: SystemState
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
})

export const SystemProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(SystemReducer, initialState)

  return (
    <SystemContext.Provider value={{ state, dispatch }}>
      {children}
    </SystemContext.Provider>
  )
}
