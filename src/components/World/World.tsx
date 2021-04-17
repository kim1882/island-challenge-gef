import * as React from 'react'
import { Container, Grid, Row } from './World.styled'
import Cell from '../Cell'

interface IWorldProps {
  width: number
  height: number
}

const World = ({ width = 1, height = 1 }: IWorldProps) => {
  return (
    <Container>
      <Grid>
        {[...Array(height)].map((e, i) => (
          <Row key={`row-${i}`}>
            {[...Array(width)].map((f, j) => (
              <Cell id={`${i}-${j}`} key={`${i}-${j}`} totalWidth={width} totalHeight={height} />
            ))}
          </Row>
        ))}
      </Grid>
    </Container>
  )
}

export default World
