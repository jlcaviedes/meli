import { ProductViewInterface } from "../entities/interfaces/product-view.interface";
import { searchEmptyView } from "../view";
import { detailView } from "../view/detail/detail.view";
import { notFoundView } from "../view/not-found/not-found.view";
import { resultView } from "../view/results/result.view";

export class ProductVueView implements ProductViewInterface {
  async startView(): Promise<string> {
    const html = searchEmptyView();
    return html;
  }
  async searchProductsView(data: any): Promise<string> {
    const html = resultView(data);
    return html;
  }
  async detailProductView(data: any): Promise<string> {
    const html = detailView(data);
    return html;
  }

  async notFound404View(): Promise<string> {
    return notFoundView();
  }
}
