import * as React from 'react'
import { screen, render, fireEvent } from '../test-utils'
import Sidebar from '../../components/Sidebar'

describe('Sidebar component', () => {
  beforeEach(() => {
    render(<Sidebar />)
  })

  test('Show Sidebar Component', () => {
    const sidebar = screen.getByLabelText('sidebar')
    expect(sidebar).toBeInTheDocument()
  })

  test('Show display width and height inputs', () => {
    const widthInput = screen.getByLabelText('Width:')
    expect(widthInput).toBeInTheDocument()

    const heightInput = screen.getByLabelText('Height:')
    expect(heightInput).toBeInTheDocument()
  })
})
