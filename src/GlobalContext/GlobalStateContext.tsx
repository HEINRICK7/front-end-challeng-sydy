import { createContext } from "react"
import { GlobalContextType } from '../types/globalContextType'

const initialValue = {
    bitcoin: [],
    setBitcoin: () => { },
    coinKey: [],
    setCoinKey: () => { },
    coinValue: [],
    setCoinValue: () => { },
    loading: false,
    setLoading: () => { }

}

export const GlobalStateContext = createContext<GlobalContextType>(initialValue)

