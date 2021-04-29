import * as React from 'react'
import { Container, Grid, Row } from './World.styled'
import Cell from '../Cell'
import LoadingOverlay from 'react-loading-overlay'

interface IWorldProps {
  width: number
  height: number
  loaded: boolean
}

const World = ({ width, height, loaded }: IWorldProps) => {
  return (
    <Container>
      <LoadingOverlay active={!loaded} spinner text="Loading...">
        <Grid>
          {[...Array(height)].map((e, i) => (
            <Row key={`row-${i}`}>
              {[...Array(width)].map((f, j) => (
                <Cell id={`${i}-${j}`} key={`${i}-${j}`} totalWidth={width} totalHeight={height} />
              ))}
            </Row>
          ))}
        </Grid>
      </LoadingOverlay>
    </Container>
  )
}

export default World
