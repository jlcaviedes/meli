import { ProductRepositoryInterface } from "../../entities/interfaces";

export class ProductTestRespositoryMock implements ProductRepositoryInterface {
  async categoriesById(categoriesId: string): Promise<any> {
    if (categoriesId === "categoria9000") {
      return ["mause"];
    }
    return [];
  }

  /**
   *
   *
   * @param {string} search
   * @return {*}  {Promise<Item[]>}
   * @memberof ProductTestRespositoryMock
   */
  async searchProducts(search: string): Promise<any> {
    if (search === "mouse") {
      return [
        {
          id: "MLA10000",
          title: "Mouse 1",
          categoryId: "categoria9000",
          price: {
            currency: "19200",
            amount: 1000,
            decimals: 1000,
          },
        },
      ];
    }
    return [];
  }

  async detailProductById(id: string) {
    if (id === "MLA10000") {
      return {
        id: "MLA10000",
        title: "Mouse 1",
        categoryId: "categoria9000",
        price: {
          currency: "19200",
          amount: 1000,
          decimals: 1000,
        },
      };
    }

    return {};
  }
}
