export interface ControllerApiInterface {
  searchProducts(search: string): Promise<any>;
  detailProductById(id: string): Promise<any>;
}
