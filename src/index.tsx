import * as React from 'react'
import styles from './styles.module.scss'
import { System } from './components/system'
import { SystemProvider } from './features/system/state'

export const VisualFlow = () => {
  return (
    <div className={styles.visualFlow}>
      <SystemProvider>
        <System />
      </SystemProvider>
    </div>
  )
}
