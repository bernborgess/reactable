import { welcomelogin } from "./welcomelogin"

describe("Check if welcome is greeting the user", () => {

  const mockAlert: (message?: any) => void = jest.fn()
  window.alert = mockAlert

  it('Should greet the user, by the given string', () => {
    const names = ["marco", "olivia", "Josh", "R2D2"];

    for (let name in names) {
      welcomelogin(name)
      expect(mockAlert).toHaveBeenCalledWith(`Welcome ${name}!`)
    }
  })
})