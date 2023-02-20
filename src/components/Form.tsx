import {
  Box,
  Button,
  Center, Input
} from "@chakra-ui/react";

type Props = {
  title: string,
  onClick: (x: string) => void,
  submitLabel: string
}

export function Form({
  title,
  onClick,
  submitLabel
}: Props) {

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const data = new FormData(ev.currentTarget)
    try {
      const email = data.get('email')
      if (!email)
        throw new Error("No email given!")
      const firstName = String(email).split("@")[0]
      onClick(firstName);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <Box
      backgroundColor='#FFF'
      borderRadius='25px'
      padding='15px'
    >
      <form
        onSubmit={onSubmit}
      >

        <Center>
          <h1>{title}</h1>
        </Center>
        <Input placeholder="email" name="email" />
        <Input placeholder="password" type="password" />
        <Center>
          <Button
            type="submit"
            colorScheme='teal'
            size='sm'
            width='100%'
            marginTop='5px'
          >
            {submitLabel}
          </Button>
        </Center>

      </form>
    </Box>
  )
}