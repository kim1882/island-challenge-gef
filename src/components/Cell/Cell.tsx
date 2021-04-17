import * as React from 'react'
import { useDispatch } from 'react-redux'
import { Container } from './Cell.styled'
import { CellType, ICellType, updateCellType } from '../../slices/world.slice'

interface ICellProps {
  id: string
  totalWidth: number
  totalHeight: number
}
const Cell = ({ id, totalWidth, totalHeight }: ICellProps) => {
  const dispatch = useDispatch()
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
    const value: ICellType = { type }
    if (id) dispatch(updateCellType({ id, value }))
  }, [id, dispatch, type])

  return <Container type={type} onClick={toggleState} totalWidth={totalWidth} totalHeight={totalHeight} />
}

export default Cell
