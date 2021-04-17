import styled, { css } from 'styled-components'

const shadow = css`
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`

export const Container = styled.section`
  background-color: white;
  margin: 20px 10px 20px 5px;
  border-radius: 8px;
  ${shadow}
`

export const Header = styled.h3`
  color: blue;
`
