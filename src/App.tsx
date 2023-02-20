import { Button } from "@chakra-ui/button";
import {
  Box, Center, ChakraProvider,
  Input
} from "@chakra-ui/react";
import { login } from "./services/login";

function App() {
  return (
    <ChakraProvider>
      <Box
        minHeight='100vh'
        backgroundColor='#9413dc'
        padding='5px'
      >
        <Box
          backgroundColor='#FFF'
          borderRadius='25px'
          padding='15px'
        >
          <Center>
            <h1>Do your login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" type="password" />
          <Center>
            <Button
              onClick={login}
              colorScheme='teal'
              size='sm'
              width='100%'
              marginTop='5px'
            >
              Press
            </Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App
