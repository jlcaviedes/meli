export interface ControllerViewInterface {
    start(): Promise<string>
    searchProducts(search: string): Promise<string>
    detailProductById(id: string): Promise<string>
}