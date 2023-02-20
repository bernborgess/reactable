import { useState } from 'react'
import './App.css'
import { Layout } from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <h1>Login here</h1>
      <label htmlFor="emailInput">
        Email
      </label>
      <input id='emailInput' type='email' />

      <label htmlFor='passwordInput'>
        Pass
      </label>
      <input id='passwordInput' type='password' />
      <button>
        Enter
      </button>
    </Layout>
  )
}

export default App
