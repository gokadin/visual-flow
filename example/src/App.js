import React from 'react'

import { VisualFlow } from 'visual-flow'
import 'visual-flow/dist/index.css'

const data = {
  nodes: [
    {
      name: 'visual',
      posX: 100,
      posY: 100,
      connections: ['3'],
    },
    {
      name: 'auditory',
      posX: 120,
      posY: 300,
      connections: ['3']
    },
    {
      name: 'sensory',
      posX: 420,
      posY: 200,
    }
  ]
}

const App = () => {
  return <VisualFlow data={data} />
}

export default App
