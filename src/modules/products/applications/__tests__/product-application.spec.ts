import { ProductApplicationInterface } from "../../entities/interfaces";
import { ProductApplication } from "../product.application";
import { ProductTestRespositoryMock } from "../__mocks__/product-api-repository.mock";

let productApplication: ProductApplicationInterface;
describe("Product Application", () => {
  beforeEach(() => {
    productApplication = new ProductApplication(
      new ProductTestRespositoryMock()
    );
  });

  it("should get product mouse", async () => {
    const result = await productApplication.searchProducts("mouse");
    expect(result).toStrictEqual({
      author: { name: "Jorge Luis", lastname: "Caviedes" },
      categories: ["mause"],
      items: [
        {
          id: "MLA10000",
          title: "Mouse 1",
          categoryId: "categoria9000",
          price: { amount: 1000, currency: "19200", decimals: 1000 },
        },
      ],
    });
  });

  it("should get product by id", async () => {
    const result = await productApplication.detailProductById("MLA10000");
    expect(result).toStrictEqual({
      author: { name: "Jorge Luis", lastname: "Caviedes" },
      categories: ["mause"],
      item: {
        id: "MLA10000",
        title: "Mouse 1",
        categoryId: "categoria9000",
        price: { amount: 1000, currency: "19200", decimals: 1000 },
      },
    });
  });
});
