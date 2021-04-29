import * as React from 'react'
import { useSelector } from 'react-redux'
import { Container } from './IslandBuilder.styled'
import World from '../../components/World'
import Sidebar from '../../components/Sidebar'
import { selectWidth, selectHeight } from '../../slices/world.slice'

const IslandBuilder = () => {
  const [loaded, setLoaded] = React.useState(false)
  const width = useSelector(selectWidth)
  const height = useSelector(selectHeight)

  return (
    <Container aria-label="islandBuilder">
      <World width={width} height={height} loaded={loaded} />
      <Sidebar onLoad={setLoaded} />
    </Container>
  )
}

export default IslandBuilder
