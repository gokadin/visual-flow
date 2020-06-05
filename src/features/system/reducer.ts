import { SystemState } from './state'

export type SystemActions = { type: 'INITIALIZE' }

const DEFAULT_WIDTH = 160
const DEFAULT_HEIGHT = 60

export const SystemReducer = (state: SystemState, action: SystemActions) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        nodes: state.nodes.map((node) => {
          return {
            ...node,
            width: node.width || DEFAULT_WIDTH,
            height: node.height || DEFAULT_HEIGHT
          }
        })
      }
    default:
      return state
  }
}
