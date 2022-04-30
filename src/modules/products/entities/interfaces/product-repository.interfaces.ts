export interface ProductRepositoryInterface {
    searchProducts(search: string): any
    detailProductById(id: string): any
}