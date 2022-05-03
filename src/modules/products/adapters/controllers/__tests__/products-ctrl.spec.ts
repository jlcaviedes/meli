import { ProductController } from "../products.ctrl";

describe("Product Cotroller", () => {
  it("should show not-found", async () => {
    const productController = new ProductController();
    const html = await productController.notFound404View();
    expect(html).toContain("404");
  });

  it("should show start", async () => {
    const productController = new ProductController();
    const html = await productController.startView();
    expect(html).toContain("Nunca dejes de buscar");
  });
});
