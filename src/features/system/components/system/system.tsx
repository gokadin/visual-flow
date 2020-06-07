import * as React from 'react'
import styles from './styles.module.scss'
import { useContext, useEffect } from 'react'
import { SystemContext } from '../../state'
import { Nodes } from '../nodes/nodes'
import { useDrop } from 'react-dnd'
import { dropNode, initialize } from '../../actions'

export const System = () => {
  const { dispatch } = useContext(SystemContext)

  useEffect(() => {
    dispatch(initialize())
  }, [])

  const [, drop] = useDrop({
    accept: 'node',
    drop: (item: any, monitor) =>
      dispatch(dropNode(item.index, monitor.getDifferenceFromInitialOffset()))
  })

  return (
    <div className={styles.system} ref={drop}>
      <Nodes />
      <svg className={styles.designerSvg} width='100%' height='100%'>
        <g className={styles.designerSvgGroup}> </g>
      </svg>
    </div>
  )
}
