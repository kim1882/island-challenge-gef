import styled, { css } from 'styled-components'

const shadow = css`
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`

export const Container = styled.section`
  background-color: white;
  margin: 20px 10px 20px 5px;
  border-radius: 8px;
  ${shadow}

  .instructions {
    margin: 10px;
    font-size: 20px;
    color: gray;
    text-align: left;
  }
`

export const Header = styled.h2`
  color: #186a3b;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`

export const Settings = styled.section`
  padding: 10px;
`

export const Property = styled.section`
  display: grid;
  grid-template-columns: 60px 70px auto;
  padding: 5px 10px;
  text-align: left;
  align-items: center;
  font-size: 13px;

  .title {
    font-weight: bold;
    font-size: 13px;
  }
  .numberInput {
    width: 40px;
    height: 20px;
    text-align: left;
    padding-left: 10px;
    margin: 0 4px;
    border-radius: 4px;
    outline-color: gray;
    border: 0.1rem solid lightgray;
  }
`

export const DisplayStats = styled.section`
  padding: 10px;
  text-align: left;
  align-items: center;
  font-size: 13px;

  .stats {
    margin: 10px;
    font-weight: bold;
    font-size: 20px;
    color: gray;
    text-align: center;
  }
  .islandCountMsg {
    color: #186a3b;
  }
  .islandCount {
    font-size: 50px;
    color: black;
  }
`
