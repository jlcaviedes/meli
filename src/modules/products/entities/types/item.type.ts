export type Item = {
    id: string,
    title: string
    price: {
        currency: string, amount: number, decimals: number
    },
    categoryId: string,
    piture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity: number,
    description: string
}