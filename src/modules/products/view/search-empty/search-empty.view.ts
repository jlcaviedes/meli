import { renderToString } from "vue/server-renderer";
import { searchComponent } from "../components";
import { containerView } from "../container/container.view";

export async function searchEmptyView() {
  const search = searchComponent("");
  const searchHtml = await renderToString(search);
  return containerView(`${searchHtml}`);
}
