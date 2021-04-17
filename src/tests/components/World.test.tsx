import * as React from 'react'
import { screen, render } from '../test-utils'
import World from '../../components/World'

describe('World component', () => {
  const width = 5
  const height = 8

  test('Show World component and display a width * height grid of cells', () => {
    render(<World width={width} height={height} />)

    const elements = screen.getAllByLabelText('cell')
    expect(elements).toHaveLength(width * height)
  })
})
