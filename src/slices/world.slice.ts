import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export enum CellType {
  SEA = 'sea',
  GREEN_LAND = 'greenLand',
  BROWN_LAND = 'brownLand',
}
export interface ICellType {
  type: CellType
}

interface ICell {
  [id: string]: ICellType
}

interface IWorldSlice {
  width: number
  height: number
  modifiedCells: ICell
}

const initialState: IWorldSlice = {
  width: 1,
  height: 1,
  modifiedCells: {},
}

const worldSlice = createSlice({
  name: 'world',
  initialState,
  reducers: {
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload
    },
    updateCellType: (state, action: PayloadAction<{ id: string; value: ICellType }>) => {
      const {
        payload: { id, value },
      } = action
      const modifiedCellsCopy = state.modifiedCells
      // The cell was modified previously, first delete existent and then add the new key/value pair
      if (modifiedCellsCopy.hasOwnProperty(id)) {
        delete modifiedCellsCopy[id]
        state.modifiedCells = { ...modifiedCellsCopy, [id]: value }
      } else {
        // The first time the cell is modified, ignore sea types, unless it was previously modified (above)
        const { type } = value
        if (type !== CellType.SEA) state.modifiedCells = { ...modifiedCellsCopy, [id]: value }
      }
    },
  },
})

export const { actions, reducer } = worldSlice

export const { setWidth, setHeight, updateCellType } = actions

export const selectWidth = (state: RootState) => state.world.width
export const selectHeight = (state: RootState) => state.world.height
export const selectModifiedCells = (state: RootState) => state.world.modifiedCells

export default reducer
