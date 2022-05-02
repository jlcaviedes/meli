export interface ProductViewInterface {
  startView(): Promise<string>;
  searchProductsView(data: any): Promise<string>;
  detailProductView(data: any): Promise<string>;
  notFound404View(): Promise<string>;
}
