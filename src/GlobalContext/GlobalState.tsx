
import { useEffect, useState, ReactNode } from "react";
import api from '../services/api'
import { GlobalStateContext } from "./GlobalStateContext"
import { Coins } from '../types/coins'
import { CoinHistorical } from '../types/coinHistorical'
import { GlobalcontextProps } from '../types/globalContextProps'

const GlobalState = ({ children }: GlobalcontextProps) => {
    const [bitcoin, setBitcoin] = useState<Coins[]>([])
    const [coinHistorical, setCoinHistorical] = useState<CoinHistorical[]>([])
    const [coinHistoricalClose, setCoinHistoricalClose] = useState<string[]>([])
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

    }, [bitcoin, loading]);
    useEffect(() => {

        api.get('/historical/close.json')
            .then(response => {
                setCoinHistoricalClose(Object.keys(response.data.bpi));
                setLoading(true)
            })
            .catch((error) => {
                console.log(error.response.message)
            })
    }, [coinHistorical]);

    const dateStart = coinHistoricalClose.slice(15, 16).toString();
    const dateEnd = coinHistoricalClose.slice([-1][0]).toString();

    useEffect(() => {

        api.get(`/historical/close.json?start=${dateStart}&end=${dateEnd}`)
            .then(response => {
                setCoinHistorical([response.data]);
                setLoading(true)
            })
            .catch((error) => {
                console.log(error.response.message)
            })
    }, [dateStart, dateEnd]);
    return (
        <GlobalStateContext.Provider value={{ bitcoin, setBitcoin, coinHistorical, setCoinHistorical, loading, setLoading }}>
            {children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState