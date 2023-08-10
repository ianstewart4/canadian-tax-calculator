import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  

  
  return (
  
    <>
      <Navbar/>
    <div className="bg-blue-500 dark:bg-gray-700 h-screen flex items-center justify-center">
      <div>
       
      
      <h1>This will be a practice Application</h1>
      <div className="card">
        <button className='bg-gray-200 dark:bg-blue-500 border-gray-700 rounded-md p-4' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </div>
    </>
  )
}

export default App
