import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Header, Property, Settings, DisplayStats } from './Sidebar.styled'
import {
  CellType,
  setWidth as setWidthAction,
  setHeight as setHeightAction,
  selectModifiedCells,
} from '../../slices/world.slice'

const DEFAULT_VALUE = 3
const MIN_VALUE = 1
const MAX_VALUE = 100

interface IPosition {
  x: number
  y: number
}

const Sidebar = () => {
  const dispatch = useDispatch()
  const [width, setWidth] = React.useState<number>(DEFAULT_VALUE)
  const [height, setHeight] = React.useState<number>(DEFAULT_VALUE)
  const [totalIslands, setTotalIslands] = React.useState<number>(0)
  const modifiedCells = useSelector(selectModifiedCells)

  const validate = (value: number) => {
    let newValue = MIN_VALUE
    if (value <= MAX_VALUE) newValue = Math.abs(value)
    return newValue
  }

  const handleNumberInputChange = (event: React.FormEvent<HTMLInputElement>, setFunc: (val: number) => void) => {
    const { value } = event.currentTarget
    setFunc(validate(parseInt(value || MIN_VALUE.toString(), 10)) || MIN_VALUE)
  }

  React.useEffect(() => {
    dispatch(setWidthAction(width))
  }, [dispatch, width])

  React.useEffect(() => {
    dispatch(setHeightAction(height))
  }, [dispatch, height])

  const visitedKeys: string[] = []

  const visitCell = React.useCallback(
    (key: string, cellType: string) => {
      if (!visitedKeys.includes(key)) {
        const value = modifiedCells[key]
        if (value) {
          const { type } = value
          if (type && type !== CellType.SEA) {
            const nearPositions = [
              { x: 0, y: -1 },
              { x: 0, y: 1 },
              { x: -1, y: 0 },
              { x: 1, y: 0 },
            ]
            if (cellType === 'start') {
              setTotalIslands((t) => t + 1)
            }
            visitedKeys.push(key)
            // Get key x, y
            const index = key.split('-')
            const x = parseInt(index[0], 10)
            const y = parseInt(index[1], 10)
            // Visit near cells
            nearPositions.forEach((position: IPosition) => {
              const newX = x + position.x
              const newY = y + position.y
              if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
                const newKey = `${newX}-${newY}`
                visitCell(newKey, 'near')
              }
            })
          }
        }
      }
    },
    // eslint-disable-next-line
    [width, height, modifiedCells]
  )

  React.useEffect(() => {
    const keys = Object.keys(modifiedCells)
    setTotalIslands(0)
    keys.forEach((key: string) => visitCell(key, 'start'))
  }, [modifiedCells, visitCell])

  const messages = [
    'Wow 🤩',
    'Amazing! 😍',
    'Breathtaking! 🥳',
    'Extraordinary! 🥳',
    'Impressive! 😯',
    'You rock! 🤘',
    'Simply Incredible...🤩',
    'Fantastic!!! 🤩',
  ]

  return (
    <Container>
      <Header>Island Builder</Header>
      <Settings>
        <div className="instructions">Define the number of rows and columns</div>
        <Property>
          <span className="title">Width:</span>
          <input
            name="widthInput"
            className="numberInput"
            type="number"
            min={MIN_VALUE}
            max={MAX_VALUE}
            value={validate(width || MIN_VALUE)}
            onInput={(e) => handleNumberInputChange(e, setWidth)}
          />
          columns
        </Property>
        <Property>
          <span className="title">Height:</span>
          <input
            name="heightInput"
            className="numberInput"
            type="number"
            min={MIN_VALUE}
            max={MAX_VALUE}
            value={validate(height || MIN_VALUE)}
            onInput={(e) => handleNumberInputChange(e, setHeight)}
          />
          rows
        </Property>
      </Settings>
      <DisplayStats>
        {totalIslands === 0 ? (
          <div className="instructions">Click any cell to start creating an island!</div>
        ) : (
          <div className="stats">
            {messages[Math.floor(Math.random() * messages.length)]}
            <br />
            <br />
            <span className="islandCountMsg">
              You've built
              <br /> <span className="islandCount">{totalIslands}</span>
              <br /> islands
            </span>
          </div>
        )}
      </DisplayStats>
    </Container>
  )
}

export default Sidebar
