import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import worldReducer from '../slices/world.slice'

export const store = configureStore({
  reducer: {
    world: worldReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
