import { SystemState } from './state'
import { DROP_NODE, INITIALIZE, SystemActionsTypes } from './actions'

const DEFAULT_WIDTH = 160
const DEFAULT_HEIGHT = 60
const DEFAULT_X = 0
const DEFAULT_Y = 0

export const SystemReducer = (
  state: SystemState,
  action: SystemActionsTypes
) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        nodes: state.nodes.map((node) => {
          return {
            ...node,
            width: node.width || DEFAULT_WIDTH,
            height: node.height || DEFAULT_HEIGHT,
            posX: node.posX || DEFAULT_X,
            posY: node.posY || DEFAULT_Y
          }
        })
      }
    case DROP_NODE:
      return {
        ...state,
        nodes: state.nodes.map((node) => {
          return {
            ...node,
            posX:
              action.payload.clientOffset == null
                ? node.posX
                : (node.posX || DEFAULT_X) + action.payload.clientOffset.x,
            posY:
              action.payload.clientOffset == null
                ? node.posY
                : (node.posY || DEFAULT_Y) + action.payload.clientOffset.y
          }
        })
      }
    default:
      return state
  }
}
