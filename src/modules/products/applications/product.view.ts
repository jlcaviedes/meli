import { ProductViewInterface } from "../entities/interfaces/product-view.interface";
import { detailView } from "../view/detail/detail.view";
import { notFoundView } from "../view/not-found/not-found.view";
import { resultView } from "../view/results/result.view";
import { searchEmptyView } from "../view/search-empty/search-empty.view";

export class ProductVueView implements ProductViewInterface {
  async start(): Promise<string> {
    const html = searchEmptyView()
    return html
  }
  async searchProducts(data: any): Promise<string> {
    const html = resultView(data)
    return html
  }
  async detailProductById(data: any): Promise<string> {
    const html = detailView(data)
    return html
  }

  async notFound404(): Promise<string> {
    return notFoundView()
  }
}