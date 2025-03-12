import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)

useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/users")
  .then ((response) => response.json())
  .then ((data) => setData(data))
}, [])
 
  return (
    <>
      <div className='App'>
        <h1>Hola mundo</h1>
        <div className='card'>
          <ul>
            {data?.map((user) => (
              <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </div>
       

      </div>
    </>
  )
}

export default App
