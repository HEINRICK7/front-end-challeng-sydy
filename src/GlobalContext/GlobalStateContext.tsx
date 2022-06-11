import { createContext } from "react"
import { GlobalContextType } from '../types/globalContextType'

const initialValue = {
    bitcoin: [],
    setBitcoin: () => { },
    coinHistorical: [],
    setCoinHistorical: () => { },
    loading: false,
    setLoading: () => { }

}

export const GlobalStateContext = createContext<GlobalContextType>(initialValue)

