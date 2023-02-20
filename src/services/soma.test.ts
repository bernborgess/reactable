import { soma } from "./soma"

describe('soma', () => {
  it('should add 1 to the param number', () => {
    const value = soma(1)
    expect(value).toBe(2)
  })
})



