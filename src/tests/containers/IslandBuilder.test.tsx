import * as React from 'react'
import { screen, render, fireEvent } from '../test-utils'
import IslandBuilder from '../../containers/IslandBuilder'

describe('Island Builder Container', () => {
  beforeEach(() => {
    render(<IslandBuilder />)
  })

  test('Show Island Builder Container', () => {
    const islandBuilder = screen.getByLabelText('islandBuilder')
    expect(islandBuilder).toBeInTheDocument()
  })

  test('Should click a cell and display the total of islands created', () => {
    const cell = screen.getAllByLabelText('cell').shift()
    if (cell) fireEvent.click(cell)

    const totalIslandsSpan = screen.getByLabelText('totalIslands')
    expect(totalIslandsSpan).toBeInTheDocument()
    expect(totalIslandsSpan).toHaveTextContent('1')
  })
})
