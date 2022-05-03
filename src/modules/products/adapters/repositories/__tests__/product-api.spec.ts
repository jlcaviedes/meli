import axios from "axios";
import { ProductApiRepository } from "../product-api.repository";

jest.mock("axios");

describe("ProductApiRepository", () => {
  it("should categoriesById", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {
        path_from_root: [{ name: "mouse" }],
      },
    });
    const productApiRepository = new ProductApiRepository();
    const result = await productApiRepository.categoriesById("categoria9000");

    expect(result).toStrictEqual(["mouse"]);
  });

  it("should searchProducts", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {
        results: [
          {
            id: "MLA10000",
            title: "Mouse 1",
            categoryId: "categoria9000",
            price: { amount: 1000, currency: "20000", decimals: 1000 },
          },
          {
            id: "MLA10005",
            title: "Mouse 2",
            categoryId: "categoria9000",
            price: { amount: 1000, currency: "19200", decimals: 1000 },
          },
          {
            id: "MLA10003",
            title: "Mouse 3",
            categoryId: "categoria9000",
            price: { amount: 1000, currency: "1000", decimals: 1000 },
          },
          {
            id: "MLA10078",
            title: "Mouse 4",
            categoryId: "categoria9000",
            price: { amount: 1000, currency: "3000", decimals: 1000 },
          },
          {
            id: "MLA10340",
            title: "Mouse 5",
            categoryId: "categoria9000",
            price: { amount: 1000, currency: "17200", decimals: 1000 },
          },
        ],
      },
    });
    const productApiRepository = new ProductApiRepository();

    const result = await productApiRepository.searchProducts("mouse");
    expect(result).toStrictEqual([
      {
        id: "MLA10000",
        condition: undefined,
        categoryId: undefined,
        description: "",
        free_shipping: false,
        piture: undefined,
        price: { amount: undefined, decimals: 0, currency: "[object Object]" },
        sold_quantity: -1,
        title: "Mouse 1",
      },
      {
        id: "MLA10005",
        condition: undefined,
        categoryId: undefined,
        description: "",
        free_shipping: false,
        piture: undefined,
        price: { amount: undefined, decimals: 0, currency: "[object Object]" },
        sold_quantity: -1,
        title: "Mouse 2",
      },
      {
        id: "MLA10003",
        condition: undefined,
        categoryId: undefined,
        description: "",
        free_shipping: false,
        piture: undefined,
        price: { amount: undefined, decimals: 0, currency: "[object Object]" },
        sold_quantity: -1,
        title: "Mouse 3",
      },
      {
        id: "MLA10078",
        condition: undefined,
        categoryId: undefined,
        description: "",
        free_shipping: false,
        piture: undefined,
        price: { amount: undefined, decimals: 0, currency: "[object Object]" },
        sold_quantity: -1,
        title: "Mouse 4",
      },
    ]);
  });

  it("should detailProductById", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {
        id: "MLA10000",
        title: "Mouse 1",
        categoryId: "categoria9000",
        price: { amount: 1000, currency: "20000", decimals: 1000 },
        plain_text: "description",
      },
    });
    const productApiRepository = new ProductApiRepository();

    const result = await productApiRepository.detailProductById("MLA10000");

    expect(result).toStrictEqual({
      categoryId: undefined,
      condition: undefined,
      description: "description",
      free_shipping: false,
      id: "MLA10000",
      piture: undefined,
      price: { amount: undefined, currency: "[object Object]", decimals: 0 },
      sold_quantity: -1,
      title: "Mouse 1",
    });
  });
});
