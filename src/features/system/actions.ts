import { XYCoord } from 'react-dnd'
import { VisualFlowData } from './types'

export const INITIALIZE = 'INITIALIZE'
interface Initialize {
  type: typeof INITIALIZE,
  payload: VisualFlowData
}

export const DROP_NODE = 'DROP_NODE'
interface DropNode {
  type: typeof DROP_NODE
  payload: {
    nodeId: string
    clientOffsetDiff: XYCoord | null
  }
}

export type SystemActionsTypes = Initialize | DropNode

export const initialize = (data: VisualFlowData): SystemActionsTypes => {
  return { type: INITIALIZE, payload: data }
}

export const dropNode = (
  nodeId: string,
  clientOffsetDiff: XYCoord | null
): SystemActionsTypes => {
  return { type: DROP_NODE, payload: { nodeId, clientOffsetDiff } }
}
