import { renderToString } from "vue/server-renderer";
import { detailProduct } from "../DetailProduct";

describe("DetailProduct", () => {
  it("should get format currency", async () => {
    const detailProductC = detailProduct({
      piture: "http://imag.example.com",
      price: { currency: 1000 },
    });
    const componentHtml = await renderToString(detailProductC);
    expect(componentHtml).toContain("$1,000");
    expect(componentHtml).toContain("Usado");
  });
});
