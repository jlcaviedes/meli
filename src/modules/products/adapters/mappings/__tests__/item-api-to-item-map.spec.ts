import { itemApiToItemMap } from "../item-api-to-item-map";

describe("itemApiToItemMap", () => {
  it("should mapping itemApi to item", () => {
    const convert = itemApiToItemMap({
      id: "MLA828975841",
      title: "Mouse Inalámbrico Logitech M280 Negro",
      category_id: "MLA1714",
      price: 1543,
      currency_id: "ARS",
      sold_quantity: 500,
      condition: "new",
      thumbnail:
        "http://http2.mlstatic.com/D_918568-MLA32146214305_092019-I.jpg",
      description: "",
      shipping: {
        free_shipping: false,
      },
      prices: [],
    });

    expect(convert).toStrictEqual({
      id: "MLA828975841",
      condition: "new",
      categoryId: "MLA1714",
      description: "",
      free_shipping: false,
      piture: "http://http2.mlstatic.com/D_918568-MLA32146214305_092019-I.jpg",
      price: { amount: undefined, decimals: 0, currency: "1543" },
      sold_quantity: -1,
      title: "Mouse Inalámbrico Logitech M280 Negro",
    });
  });
});
