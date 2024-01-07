import { useState } from 'react'

import { Button, buttonVariants} from './components/ui/button.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Button variant="ghost">Click me!</Button>
        <Button variant="outline">Click me!</Button>
        <Button variant="secondary">Click me!</Button>
        <Button className="animate-in zoom-in duration-500">Click me!</Button>
      </div>

    </>
  )
}

export default App
