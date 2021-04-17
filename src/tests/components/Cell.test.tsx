import * as React from 'react'
import { screen, render, fireEvent } from '../test-utils'
import Cell from '../../components/Cell'

describe('Cell Component', () => {
  const id = '0-0'
  const totalWidth = 3
  const totalHeight = 3

  beforeEach(() => {
    render(<Cell id={id} totalWidth={totalWidth} totalHeight={totalHeight} />)
  })

  test('Show Cell Component', () => {
    const cell = screen.getByLabelText('cell')
    expect(cell).toBeInTheDocument()
  })

  test('Show be able to switch across all types of cells', () => {
    const cell = screen.getByLabelText('cell')

    // First time cell is clicked, has type 'sea'
    expect(cell).toHaveAttribute('type', 'sea')

    // When clicked, changes to 'greenLand'
    fireEvent.click(cell)
    expect(cell).toHaveAttribute('type', 'greenLand')

    // When clicked, changes to 'brownLand'
    fireEvent.click(cell)
    expect(cell).toHaveAttribute('type', 'brownLand')

    // When clicked, changes to 'sea' again!
    fireEvent.click(cell)
    expect(cell).toHaveAttribute('type', 'sea')
  })
})
