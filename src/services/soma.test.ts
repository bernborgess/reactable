import { eitherMultiply, maybeMultiply, multiply, soma } from "./soma"

describe('soma', () => {
  it('should add 1 to the param number', () => {
    const value = soma(1)
    expect(value).toBe(2)
  })

  it('should throw error on invalid param b', () => {
    expect(() => multiply(2, 4))
      .toThrow('Argument b is invalid!')
  })

  it('should check for the maybeMultiply', () => {
    const value = maybeMultiply(2, 3)
    expect(value).toEqual({ just: 6 })

    const nothing = maybeMultiply(3, 4)
    expect(nothing).toEqual({ nothing: undefined })
  })

  it('should check for the eitherMultiply', () => {
    const rvalue = eitherMultiply(2, 3)
    expect(rvalue).toEqual({ right: 6 })

    const lvalue = eitherMultiply(3, 4)
    expect(lvalue).toEqual({ left: 'Argument b is invalid!' })
  })
})


