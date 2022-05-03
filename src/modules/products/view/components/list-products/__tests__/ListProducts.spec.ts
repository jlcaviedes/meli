import { renderToString } from "vue/server-renderer";
import { listProducts } from "../ListProducts";

describe("ListProducts", () => {
  it("should get format currency", async () => {
    const detailProductC = listProducts([
      {
        piture: "http://imag.example.com",
        price: { currency: 1000 },
        free_shipping: true,
      },
    ]);
    const componentHtml = await renderToString(detailProductC);
    expect(componentHtml).toContain("$1,000");
    expect(componentHtml).toContain("Envío gratis");
  });
});
