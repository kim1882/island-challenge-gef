import styled from 'styled-components'
import { CellType } from '../../slices/world.slice'

interface IContainerProps {
  type: CellType
  totalWidth: number
  totalHeight: number
}

export const Container = styled.section<IContainerProps>`
  box-sizing: border-box;
  background-color: ${(props) =>
    props.type === CellType.SEA
      ? 'lightskyblue'
      : props.type === CellType.GREEN_LAND
      ? '#186a3b'
      : props.type === CellType.BROWN_LAND
      ? '#966c3b'
      : 'lightskyblue'};
  border: 1px dashed #186a3b;
  width: calc((100vw - 455px) / ${(props) => props.totalWidth});
  height: calc((100vh - 80px) / ${(props) => props.totalHeight});
`
