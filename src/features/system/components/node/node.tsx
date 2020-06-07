import * as React from 'react'
import styles from './styles.module.scss'
import { useContext } from 'react'
import { SystemContext } from '../../state'
import { useDrag } from 'react-dnd'

type NodeViewProps = {
  nodeIndex: number
}

export const NodeView = ({ nodeIndex }: NodeViewProps) => {
  const { state } = useContext(SystemContext)

  const node = state.nodes[nodeIndex]

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'node', index: nodeIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <div
      className={styles.node}
      key={node.id}
      ref={dragRef}
      style={{
        left: node.posX,
        top: node.posY,
        width: node.width,
        height: node.height,
        visibility: isDragging ? 'hidden' : 'visible'
      }}
    >
      <div className={styles.header}>{node.name}</div>
      <div className={styles.body}>
        <div className={styles.connectionIn} />
        <div className={styles.connectionOut} />
      </div>
    </div>
  )
}
