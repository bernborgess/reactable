import {
  Box,
  Button,
  Center,
  Input
} from "@chakra-ui/react";

type Props = {
  title: string,
  onClick: () => void,
  submitLabel: string
}

export function Form({
  title,
  onClick,
  submitLabel
}: Props) {
  return (
    <Box
      backgroundColor='#FFF'
      borderRadius='25px'
      padding='15px'
    >
      <Center>
        <h1>{title}</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" type="password" />
      <Center>
        <Button
          onClick={onClick}
          colorScheme='teal'
          size='sm'
          width='100%'
          marginTop='5px'
        >
          {submitLabel}
        </Button>
      </Center>
    </Box>
  )
}