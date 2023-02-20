import {
  Box, ChakraProvider
} from "@chakra-ui/react";
import { Form } from "./components/Form";
import { Header } from "./components/Header/Header";
import { login } from "./services/login";

function App() {
  return (
    <ChakraProvider>
      <Box
        minHeight='100vh'
        backgroundColor='lightBlue'
        padding='5px'
      >
        <Header />
        <Form
          title="Please login to your bank"
          onClick={login}
          submitLabel="Login"
        />

      </Box>
    </ChakraProvider>
  )
}

export default App
