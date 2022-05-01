import { getAuthor } from "../../../core/signature";
import {
  ProductApplicationInterface,
  ProductRepositoryInterface,
} from "../entities/interfaces";
import { Item } from "../entities/types";

export class ProductApplication implements ProductApplicationInterface {
  private _repository: ProductRepositoryInterface;

  constructor(repository: ProductRepositoryInterface) {
    this._repository = repository;
  }

  async searchProducts(search: string) {
    const items = await this._repository.searchProducts(search);

    let ranking = this.rankingCategory(items);

    const categories = await this._repository.categoriesById(ranking.value);
    return {
      ...getAuthor(),
      categories,
      items,
    };
  }

  async detailProductById(id: string) {
    const item = await this._repository.detailProductById(id);
    const categories = await this._repository.categoriesById(item.categoryId);
    return { ...getAuthor(), item, categories };
  }

  private rankingCategory(items: Item[]) {
    const rankingCategory: any = {};
    items.forEach((item: any) => {
      const key = item.categoryId;
      rankingCategory[key] = (rankingCategory[key] || 0) + 1;
    });

    let ranking = { value: "", count: 0 };
    Object.keys(rankingCategory).forEach((key) => {
      rankingCategory[key] > ranking.count &&
        (ranking = { value: key, count: rankingCategory[key] });
    });
    return ranking;
  }
}
