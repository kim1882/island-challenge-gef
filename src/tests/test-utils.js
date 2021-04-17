import * as React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { configStore } from '../app/store'

export function render(ui, { locale = 'en', initialState = {}, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    const store = configureStore({ ...configStore, preloadedState: initialState })
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
