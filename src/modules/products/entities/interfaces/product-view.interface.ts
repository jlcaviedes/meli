export interface ProductViewInterface {
    start(): Promise<string>
    searchProducts(data: any): Promise<string>
    detailProductById(data: any): Promise<string>
    notFound404(): Promise<string>
}