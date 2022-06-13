
import { useEffect, useState } from "react";
import api from '../services/api'
import { GlobalStateContext } from "./GlobalStateContext"
import { Coins } from '../types/coins'
import { GlobalcontextProps } from '../types/globalContextProps'

const GlobalState = ({ children }: GlobalcontextProps) => {
    const [bitcoin, setBitcoin] = useState<Coins[]>([])
    const [coinKey, setCoinKey] = useState<string[]>([])
    const [coinValue, setCoinValue] = useState<number[]>([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        api.get('/currentprice.json')
            .then(response => {
                setBitcoin([response.data]);
                setLoading(true)
            })
            .catch((error) => {
                console.log(error.response.message)
            })

        api.get('/historical/close.json')
        .then(response => {
            setCoinKey(Object.keys(response.data.bpi));
            setCoinValue(Object.values(response.data.bpi));
            setLoading(true)
        })
        .catch((error) => {
            console.log(error.response.message)
        })
    }, []);

    return (
        <GlobalStateContext.Provider value={{ bitcoin, setBitcoin, coinKey, setCoinKey,coinValue, setCoinValue, loading, setLoading }}>
            {children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState