import * as React from 'react'
import styles from './styles.module.scss'
import { useContext, useEffect } from 'react'
import { SystemContext } from '../../state'
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
          {state.connections.map((_connection, index) => {
            return (
              <path
                key={index}
                d='M 0,0 C 35,0 65,100 100,100'
                stroke='#fff'
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
