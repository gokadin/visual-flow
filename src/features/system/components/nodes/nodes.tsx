import * as React from 'react'
import { useContext } from 'react'
import { SystemContext } from '../../state'
import styles from './styles.module.scss'
import { NodeView } from '../node/node'

export const Nodes = () => {
  const { state } = useContext(SystemContext)

  return (
    <div className={styles.nodes}>
      {state.nodes.map((_node, index) => {
        return <NodeView key={index} nodeIndex={index} />
      })}
    </div>
  )
}
