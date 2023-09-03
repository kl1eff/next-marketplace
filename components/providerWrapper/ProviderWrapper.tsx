'use client'
import store from '@/store'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

function ProviderWrapper({children}: {children: ReactNode}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ProviderWrapper