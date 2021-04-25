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
const nearPositions = [
  { x: 0, y: -1 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
  { x: 1, y: 0 },
]
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

  const getXY = (key: string) => {
    const index = key.split('-')
    const x = parseInt(index[0], 10)
    const y = parseInt(index[1], 10)
    return { x, y }
  }
  const cellExists = (key: string) => {
    const { x, y } = getXY(key)
    return x >= 0 && x < height && y >= 0 && y < width
  }

  const visitCell = React.useCallback(
    (key: string, cellType: string) => {
      if (!visitedKeys.includes(key) && cellExists(key)) {
        const value = modifiedCells[key]
        if (value) {
          const { type } = value
          if (type && type !== CellType.SEA) {
            if (cellType === 'start') {
              setTotalIslands((t) => t + 1)
            }
            visitedKeys.push(key)
            // Get key x, y
            const { x, y } = getXY(key)
            // Visit near cells
            nearPositions.forEach((position: IPosition) => {
              const newKey = `${x + position.x}-${y + position.y}`
              visitCell(newKey, 'near')
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
  }, [modifiedCells, visitCell, width, height])

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
    <Container aria-label="sidebar">
      <Header>Island Builder</Header>
      <Settings>
        <div className="instructions">Define the number of rows and columns</div>
        <Property>
          <label htmlFor={'widthInput'} className="title">
            Width:
          </label>
          <input
            id="widthInput"
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
          <label htmlFor={'heightInput'} className="title">
            Height:
          </label>
          <input
            id="heightInput"
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
              <br />{' '}
              <span aria-label={'totalIslands'} className="islandCount">
                {totalIslands}
              </span>
              <br /> islands
            </span>
          </div>
        )}
      </DisplayStats>
    </Container>
  )
}

export default Sidebar
