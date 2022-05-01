export type ItemApi = {
    id: string,
    title: string
    thumbnail: string,
    price: number,
    currency_id: string,
    category_id: string,
    prices: {
        currency_id: string, amount: number
    }[], condition: string,

    shipping: { free_shipping: boolean },
    sold_quantity: number,
    description: string
}