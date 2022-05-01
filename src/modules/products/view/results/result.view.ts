import { renderToString } from "vue/server-renderer";
import { breadcrumb, listProducts, searchComponent } from "../components";
import { containerView } from "../container/container.view";

export async function resultView(data: any) {
  const search = searchComponent(data.search);
  const searchHtml = await renderToString(search);

  const listProductsC = listProducts(data.items);
  const listProductsHtml = await renderToString(listProductsC);

  const breadcrumbC = breadcrumb(data.categories);
  const breadcrumbHtml = await renderToString(breadcrumbC);

  return containerView(`       
        ${searchHtml}
        <div class="wraper">${breadcrumbHtml}</div>
        <div class="wraper">${listProductsHtml}</div> 
      `);
}
