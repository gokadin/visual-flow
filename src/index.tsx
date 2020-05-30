import * as React from 'react'
import styles from './styles.module.css'

export interface VisualFlowData {
  nodes: Node[]
}

interface Node {
  id: string
  connections: string[]
}

interface Props {
  data: VisualFlowData
}

// eslint-disable-next-line no-empty-pattern
export const ExampleComponent = ({ data }: Props) => {
  return (
    <div className={styles.visualFlow}>
      {data.nodes.length}
      <svg className={styles.designerSvg} width='100%' height='100%'>
        <g className={styles.designerSvgGroup}> </g>
      </svg>
    </div>
  )
}
