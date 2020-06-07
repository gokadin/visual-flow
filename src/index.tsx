import * as React from 'react'
import styles from './styles.module.scss'
import { SystemProvider } from './features/system/state'
import { System } from './features/system/components/system/system'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const VisualFlow = () => {
  return (
    <div className={styles.visualFlow}>
      <SystemProvider>
        <DndProvider backend={HTML5Backend}>
          <System />
        </DndProvider>
      </SystemProvider>
    </div>
  )
}
