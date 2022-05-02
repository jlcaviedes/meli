import axios from "axios";
import { itemApiToItemMap } from "../../entities/mappings/item-api-to-item-map";
import { convertNormalizedText } from "../../../../utils/format";
import { ProductRepositoryInterface } from "../../entities/interfaces";
export class ProductApiRepository implements ProductRepositoryInterface {
  async categoriesById(categoriesId: string): Promise<string> {
    const resutlCategory = (await axios.get(
      `https://api.mercadolibre.com/categories/${categoriesId}`
    )) as any;
    const categories = resutlCategory.data?.path_from_root || [];
    return categories.map((category: any) => category.name);
  }

  async searchProducts(search: string): Promise<any> {
    const _search = convertNormalizedText(search);
    const resutls = (await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${_search}`
    )) as any;
    const items = resutls.data?.results || [];

    return items.slice(0, 4).map(itemApiToItemMap);
  }

  async detailProductById(id: string): Promise<any> {
    const resutls = (await axios.get(
      `https://api.mercadolibre.com/items/${id}`
    )) as any;
    const resutlDescription = (await axios.get(
      `https://api.mercadolibre.com/items/${id}/description`
    )) as any;

    const data = resutls.data || {};
    const item = itemApiToItemMap(data);

    item.description = resutlDescription.data.plain_text;
    return item;
  }
}
