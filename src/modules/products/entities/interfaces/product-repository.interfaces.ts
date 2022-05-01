export interface ProductRepositoryInterface {
    searchProducts(search: string): Promise<any>
    categoriesById(categoriesId: string): Promise<any>
    detailProductById(id: string): Promise<any>
}