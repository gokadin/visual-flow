import * as React from 'react'
import styles from './styles.module.scss'
import { useContext, useEffect } from 'react'
import { SystemContext } from '../features/system/state'

export const System = () => {
  const { state, dispatch } = useContext(SystemContext)

  useEffect(() => {
    dispatch({ type: 'INITIALIZE' })
  }, [])

  return (
    <div className={styles.system}>
      {state.nodes.map((node) => {
        return (
          <div
            className={styles.node}
            key={node.id}
            style={{
              left: node.posX,
              top: node.posY,
              width: node.width,
              height: node.height
            }}
          >
            <div className={styles.header}>{node.name}</div>
            <div className={styles.body}>
              <div className={styles.connectionIn} />
              <div className={styles.connectionOut} />
            </div>
          </div>
        )
      })}

      <svg className={styles.designerSvg} width='100%' height='100%'>
        <g className={styles.designerSvgGroup}> </g>
      </svg>
    </div>
  )
}
