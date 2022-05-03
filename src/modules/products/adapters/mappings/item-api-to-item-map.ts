import { Item, ItemApi } from "../../entities/types";

export function itemApiToItemMap(itemApi: ItemApi): Item {
  const price = (itemApi.prices || [{}])[0] || {};
  return {
    id: itemApi.id,
    condition: itemApi.condition,
    categoryId: itemApi.category_id,
    description: "",
    free_shipping: itemApi?.shipping?.free_shipping || false,
    piture: itemApi.thumbnail,
    price: {
      amount: price.amount,
      decimals: 0,
      currency: (itemApi.price || 0).toString(),
    },
    sold_quantity: -1,
    title: itemApi.title,
  };
}
