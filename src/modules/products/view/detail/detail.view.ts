import { renderToString } from "vue/server-renderer"
import { detailProduct } from "../components/detail-product/DetailProduct"
import { searchComponent } from "../components/search/SearchComponent"

export async function detailView() {
  const search = searchComponent()
  const searchHtml = await renderToString(search)
  const detail = await detailProduct({})
  const detailHtml = await renderToString(detail)
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Mercado Libre</title>
          <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>
        </head>
        <body>
          <div id="app">
              ${searchHtml}
              ${detailHtml}
          </div>
        </body>
      </html>
      `
}