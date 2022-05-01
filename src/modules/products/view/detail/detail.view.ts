import { renderToString } from "vue/server-renderer";
import { breadcrumb, detailProduct, searchComponent } from "../components";
import { containerView } from "../container/container.view";

export async function detailView(data: any) {
  const search = searchComponent("");
  const searchHtml = await renderToString(search);

  const detail = await detailProduct(data.item);
  const detailHtml = await renderToString(detail);

  const breadcrumbC = breadcrumb(data.categories);
  const breadcrumbHtml = await renderToString(breadcrumbC);

  return containerView(`       
      ${searchHtml}
      <div class="wraper">${breadcrumbHtml}</div>
      <div class="wraper">${detailHtml}</div> 
    `);
}
