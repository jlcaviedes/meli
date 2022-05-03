export interface ControllerViewInterface {
  startView(): Promise<string>;
  searchProductsView(search: string): Promise<string>;
  detailProductView(id: string): Promise<string>;
  notFound404View(): Promise<string>;
}
