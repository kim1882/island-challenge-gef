import styled, { css } from 'styled-components'

const shadow = css`
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`

export const Container = styled.section`
  background-color: white;
  margin: 20px 5px 20px 10px;
  border-radius: 8px;

  ${shadow}
`

export const Grid = styled.section`
  margin: 20px;
  overflow: hidden;
  border-radius: 8px;
  max-width: calc(100vw - 455px);
  max-height: calc(100vh - 80px);
`

export const Row = styled.section`
  display: flex;
`
