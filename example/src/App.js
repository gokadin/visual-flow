import React from 'react'

import { ExampleComponent } from 'visual-flow'
import 'visual-flow/dist/index.css'

const data = {
  nodes: [
    {
      id: '1',
      connections: ['2', '3']
    },
    {
      id: '2'
    },
    {
      id: '3'
    }
  ]
}

const App = () => {
  return <ExampleComponent data={data} />
}

export default App
