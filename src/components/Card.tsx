
type Props = {
  id: number,
  paragraph: string,
  details: string
}

export function Card({ id, paragraph, details }: Props) {
  return (
    <div>
      <h1>Card {id}</h1>
      <p>{paragraph}</p>
      <p>{details}</p>
    </div>
  )
}