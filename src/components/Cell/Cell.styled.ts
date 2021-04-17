import styled from 'styled-components'

interface IContainerProps {
  totalWidth: number
  totalHeight: number
}
export const Container = styled.section<IContainerProps>`
  background-color: blue;
  border: 1px solid black;
  width: calc((100vw - 455px) / ${(props) => props.totalWidth});
  height: calc((100vh - 80px) / ${(props) => props.totalHeight});
`
