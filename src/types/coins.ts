export type Coins = {
    time: {
        updated: Date,
        updatedISO: Date,
        updateduk: Date,
    },
    disclaimer: string,
    chartName: string,
    bpi: {
        USD: {
            code: string,
            symbol: string,
            rate: string,
            description: string,
            rate_float: number,
        },
        GBP: {
            code: string,
            symbol: string,
            rate: string,
            description: string,
            rate_float: number,
        },
        EUR: {
            code: string,
            symbol: string,
            rate: string,
            description: string,
            rate_float: number,
        },
    }
}