export interface ProductViewInterface {
    start(): Promise<string>
    searchProducts(search: string): Promise<string>
    detailProductById(): Promise<string>
}