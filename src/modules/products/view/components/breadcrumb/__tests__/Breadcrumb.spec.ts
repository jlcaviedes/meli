import { renderToString } from "vue/server-renderer";
import { breadcrumb } from "../Breadcrumb";

describe("Breadcrumb", () => {
  it("should create a breadcrumb", async () => {
    const breadcrumbC = breadcrumb(["tecnologia", "accesorios", "mouse"]);
    const componentHtml = await renderToString(breadcrumbC);

    expect(componentHtml).toContain("tecnologia");
    expect(componentHtml).toContain("accesorios");
    expect(componentHtml).toContain("mouse");
  });
});
