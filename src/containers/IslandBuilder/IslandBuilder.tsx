import * as React from 'react'
import { Container } from './IslandBuilder.styled'
import World from '../../components/World'
import Settings from '../../components/Settings'

const IslandBuilder = () => {
  const width = 5
  const height = 5

  return (
    <Container>
      <World width={width} height={height} />
      <Settings />
    </Container>
  )
}

export default IslandBuilder
