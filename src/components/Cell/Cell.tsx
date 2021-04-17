import * as React from 'react'
import { Container } from './Cell.styled'

interface ICellProps {
  totalWidth: number
  totalHeight: number
}
const Cell = ({ totalWidth, totalHeight }: ICellProps) => {
  return <Container totalWidth={totalWidth} totalHeight={totalHeight} />
}

export default Cell
