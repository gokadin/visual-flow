import { Connection, SystemState } from './state'
import { DROP_NODE, INITIALIZE, SystemActionsTypes } from './actions'
import { VisualFlowData } from './types'

const DEFAULT_WIDTH = 160
const DEFAULT_HEIGHT = 60
const CONN_IN_OFFSET_X = 5
const CONN_IN_OFFSET_Y = 10
const CONN_OUT_OFFSET_X = -5
const CONN_OUT_OFFSET_Y = 10

export const SystemReducer = (
  state: SystemState,
  action: SystemActionsTypes
) => {
  switch (action.type) {
    case INITIALIZE:
      return initialize(action.payload)
    case DROP_NODE:
      return {
        ...state,
        nodes: state.nodes.map((node) => {
          if (node.id !== action.payload.nodeId) {
            return node
          }
          return {
            ...node,
            posX:
              action.payload.clientOffsetDiff == null
                ? node.posX
                : node.posX + action.payload.clientOffsetDiff.x,
            posY:
              action.payload.clientOffsetDiff == null
                ? node.posY
                : node.posY + action.payload.clientOffsetDiff.y
          }
        })
      }
    default:
      return state
  }
}

const initialize = (data: VisualFlowData): SystemState => {
  const connections: Connection[] = []
  return {
    nodes: data.nodes.map((node, nodeIndex) => {
      const nodeId = node.id ? node.id : nodeIndex.toString()
      let nodeConnections: string[] = []
      if (node.connections) {
        nodeConnections = node.connections
        node.connections.map((toId) =>
          connections.push({ from: nodeId, to: toId })
        )
      }
      return {
        id: nodeId,
        name: node.name,
        width: node.width || DEFAULT_WIDTH,
        height: node.height || DEFAULT_HEIGHT,
        posX: node.posX,
        posY: node.posY,
        connections: nodeConnections,
        inCx: node.posX + CONN_IN_OFFSET_X,
        inCy: node.posY + ((node.height || DEFAULT_HEIGHT) / 2) + CONN_IN_OFFSET_Y,
        outCx: node.posX + (node.width || DEFAULT_WIDTH) + CONN_OUT_OFFSET_X,
        outCy: node.posY + ((node.height || DEFAULT_HEIGHT) / 2) + CONN_OUT_OFFSET_Y
      }
    }),
    connections: connections
  }
}
