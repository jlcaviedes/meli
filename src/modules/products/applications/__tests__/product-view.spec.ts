import { ProductViewInterface } from "../../entities/interfaces";
import { ProductVueView } from "../product.view";

let productView: ProductViewInterface;
describe("Product View", () => {
  beforeEach(() => {
    productView = new ProductVueView();
  });

  it("should view search", async () => {
    const result = await productView.searchProductsView({
      author: { name: "Jorge Luis", lastname: "Caviedes" },
      categories: ["mouse"],
      items: [{ title: "mause 3", price: { currency: 1000 } }],
    });
    expect(result).toContain("mause 3");
    expect(result).toContain("$1,000");
  });

  it("should view detail", async () => {
    const result = await productView.detailProductView({
      author: { name: "Jorge Luis", lastname: "Caviedes" },
      categories: ["mouse"],
      item: { title: "mause 3", price: { currency: 1000 } },
    });
    expect(result).toContain("mause 3");
    expect(result).toContain("$1,000");
  });
});
