import { login } from "./login"

describe('Login', () => {

  const mockAlert: (message?: any) => void = jest.fn()
  window.alert = mockAlert

  it('Should show an alert with "Welcome!"', () => {
    login()
    expect(mockAlert).toHaveBeenCalledWith("Welcome!")

  })
})
