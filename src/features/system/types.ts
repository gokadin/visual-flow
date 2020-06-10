export interface VisualFlowData {
  nodes: VisualFlowNode[]
}

export interface VisualFlowNode {
  id?: string
  name: string
  connections?: string[]
  width?: number
  height?: number
  posX: number
  posY: number
}
