import { Coins } from '../types/coins'

export type GlobalContextType = { 
  bitcoin: Coins[],
  setBitcoin: (newState: Coins[]) => void,
  coinKey: Array<string>,
  setCoinKey: (newState: Array<string>) => void,
  coinValue: Array<number>,
  setCoinValue: (newState: Array<number>) => void,
  loading: boolean,
  setLoading: (newState: boolean) => void
}
