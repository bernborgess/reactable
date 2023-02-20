import styled from "styled-components";
import { Layout } from './components/Layout';

const Box = styled.div`
  background-color: orange;
  border-radius: 25px;
  padding-left: 15px;
`

function App() {

  return (
    <Layout>
      <Box>
        <h1>Login here</h1>
      </Box>
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
