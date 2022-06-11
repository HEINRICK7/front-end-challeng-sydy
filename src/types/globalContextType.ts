import { Coins } from '../types/coins'
import { CoinHistorical } from '../types/coinHistorical'

export type GlobalContextType = { 
  bitcoin: Coins[],
  setBitcoin: (newState: Coins[]) => void,
  coinHistorical: CoinHistorical[],
  setCoinHistorical: (newState: CoinHistorical[]) => void,
  loading: boolean,
  setLoading: (newState: boolean) => void
}
