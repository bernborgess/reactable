
export const soma = (a: number) =>
  a + 1

export const multiply = (a: number, b: number) => {
  if (b !== 2 && b !== 3)
    throw new Error("Argument b is invalid!")
  return a * b
}

//? Trying to use the Maybe Monad
type Maybe<T> = { just: T } | { nothing: undefined }

export const maybeMultiply = (a: number, b: number): Maybe<number> => {
  if (b !== 2 && b !== 3)
    return { nothing: undefined }
  return { just: a * b }
}

//? Implementation with the Either type
type Either<T, U> = { left: T } | { right: U }

export const eitherMultiply = (a: number, b: number): Either<string, number> => {
  if (b !== 2 && b !== 3)
    return { left: "Argument b is invalid!" }
  return { right: a * b }
}
