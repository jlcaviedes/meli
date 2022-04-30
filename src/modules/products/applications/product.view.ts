import { ProductViewInterface } from "../entities/interfaces/product-view.interface";
import { detailView } from "../view/detail/detail.view";
import { resultView } from "../view/results/result.view";
import { searchEmptyView } from "../view/search-empty/search-Empty.view";

export class ProductVueView implements ProductViewInterface {
  async start(): Promise<string> {
    const html = searchEmptyView()
    return html
  }
  async searchProducts(search: string): Promise<string> {
    const html = resultView({})

    return html
  }
  async detailProductById(): Promise<string> {
    const html = detailView()

    return html
  }

}