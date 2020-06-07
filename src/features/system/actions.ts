import { XYCoord } from 'react-dnd'

export const INITIALIZE = 'INITIALIZE'
interface Initialize {
  type: typeof INITIALIZE
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

export const initialize = (): SystemActionsTypes => {
  return { type: INITIALIZE }
}

export const dropNode = (
  nodeId: string,
  clientOffsetDiff: XYCoord | null
): SystemActionsTypes => {
  return { type: DROP_NODE, payload: { nodeId, clientOffsetDiff } }
}
