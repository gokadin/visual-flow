import * as React from 'react'
import styles from './styles.module.scss'
import { useContext, useEffect } from 'react'
import { SystemContext, Connection } from '../../state'
import { Nodes } from '../nodes/nodes'
import { useDrop } from 'react-dnd'
import { dropNode, initialize } from '../../actions'
import { VisualFlowData } from '../../types'

type SystemProps = {
  data: VisualFlowData
}

export const System = ({ data }: SystemProps) => {
  const { state, dispatch } = useContext(SystemContext)

  useEffect(() => {
    dispatch(initialize(data))
  }, [])

  const calcD = (connection: Connection) => {
    let from = state.nodes.find((node) => node.id == connection.from)
    let to = state.nodes.find((node) => node.id == connection.to)
    if (!from || !to) {
      return ''
    }

    const ax = (from.outCx || 0)
    const ay = (from.outCy || 0)
    const bx = (to.inCx || 0)
    const by = (to.inCy || 0)

    let s = 'M ' + ax + ',' + ay + ' C ' + (ax + (bx - ax) / 3) + ',' + ay + ' ' + (ax + (bx - ax) / 3 * 2) + ',' + by + ' ' + bx + ',' + by
    return s
  }

  const [, drop] = useDrop({
    accept: 'node',
    drop: (item: any, monitor) =>
      dispatch(dropNode(item.nodeId, monitor.getDifferenceFromInitialOffset()))
  })

  return (
    <div className={styles.system} ref={drop}>
      <Nodes />
      <svg className={styles.designerSvg} width='100%' height='100%'>
        <g className={styles.designerSvgGroup}>
          {state.connections.map((connection, index) => {
            return (
              <path
                key={index}
                d={calcD(connection)}
                stroke='#9c621a'
                strokeWidth='1'
                fill='transparent'
                vectorEffect='non-scaling-stroke'
              />
            )
          })}
        </g>
      </svg>
    </div>
  )
}
