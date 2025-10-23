'use client'
import { Store } from "@/store"
import { Provider } from "react-redux"

type Props = Readonly<{
  children: React.ReactNode
}>

function ReduxProvider({ children }: Props) {
  return (
    <Provider store={Store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider