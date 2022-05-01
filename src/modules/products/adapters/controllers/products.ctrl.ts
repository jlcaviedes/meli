import { ProductApplication, ProductVueView } from "../../applications";
import {
  ControllerApiInterface,
  ControllerViewInterface,
} from "../../entities/interfaces";
import { ProductApiRepository } from "../repositories/product-api.repository";

export class ProductController
  implements ControllerViewInterface, ControllerApiInterface
{
  private _app: ProductApplication;
  private _view: ProductVueView;

  constructor() {
    this._app = new ProductApplication(new ProductApiRepository());
    this._view = new ProductVueView();
  }

  async searchProductsView(search: string): Promise<string> {
    let viewHtml = "";
    try {
      const data = await this.searchProducts(search);
      viewHtml = await this._view.searchProducts({ ...data, search });
    } catch (error) {
      viewHtml = await this._view.notFound404();
    }
    return viewHtml;
  }
  async detailProductView(id: string): Promise<string> {
    let viewHtml = "";

    try {
      const data = await this.detailProductById(id);
      viewHtml = await this._view.detailProductById({ ...data });
    } catch (error) {
      viewHtml = await this._view.notFound404();
    }

    return viewHtml;
  }
  async notFound404View(): Promise<string> {
    return await this._view.notFound404();
  }

  async startView(): Promise<string> {
    return await this._view.start();
  }

  async searchProducts(search: string): Promise<any> {
    return await this._app.searchProducts(search);
  }

  async detailProductById(id: string): Promise<any> {
    return await this._app.detailProductById(id);
  }
}
