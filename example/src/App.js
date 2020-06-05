import React from 'react'

import { VisualFlow } from 'visual-flow'
import 'visual-flow/dist/index.css'

const data = {
  nodes: [
    {
      id: '1',
      connections: ['2', '3'],
      posX: 0,
      posY: 0
    },
    {
      id: '2',
      posX: 100,
      posY: 100
    },
    {
      id: '3',
      posX: 100,
      posY: 200
    }
  ]
}

const App = () => {
  return <VisualFlow data={data} />
}

export default App
