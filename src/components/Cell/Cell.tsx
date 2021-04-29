import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from './Cell.styled'
import { CellType, ICellProperties, updateCellType, selectModifiedCells } from '../../slices/world.slice'

interface ICellProps {
  id: string
  totalWidth: number
  totalHeight: number
}
const Cell = ({ id, totalWidth, totalHeight }: ICellProps) => {
  const dispatch = useDispatch()
  const modifiedCells = useSelector(selectModifiedCells)
  const [type, setType] = React.useState<CellType>(CellType.SEA)

  const toggleState = () => {
    switch (type) {
      case CellType.SEA:
        setType(CellType.GREEN_LAND)
        break
      case CellType.GREEN_LAND:
        setType(CellType.BROWN_LAND)
        break
      case CellType.BROWN_LAND:
        setType(CellType.SEA)
        break
    }
  }

  React.useEffect(() => {
    // Read initial value from store
    if (modifiedCells) {
      const initValue = modifiedCells[id]
      if (initValue) {
        const { type } = initValue
        setType(type)
      }
    }
  }, [id, modifiedCells])

  React.useEffect(() => {
    const value: ICellProperties = { type }
    if (id) dispatch(updateCellType({ id, value }))
  }, [id, dispatch, type])

  return (
    <Container aria-label="cell" type={type} onClick={toggleState} totalWidth={totalWidth} totalHeight={totalHeight} />
  )
}

export default Cell
