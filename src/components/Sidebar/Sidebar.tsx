import * as React from 'react'
import { useDispatch } from 'react-redux'
import { Container, Header, Property, Settings } from './Sidebar.styled'
import { setWidth as setWidthAction, setHeight as setHeightAction } from '../../slices/world.slice'

const MIN_VALUE = 1
const MAX_VALUE = 100

const Sidebar = () => {
  const dispatch = useDispatch()
  const [width, setWidth] = React.useState<number>(1)
  const [height, setHeight] = React.useState<number>(1)

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

  return (
    <Container>
      <Header>Island Builder</Header>
      <Settings>
        <Property>
          <span className="name">Width:</span>
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
          <span className="name">Height:</span>
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
    </Container>
  )
}

export default Sidebar
