import { renderToString } from "vue/server-renderer"
import { listProducts } from "../components/list-products/ListProducts"
import { searchComponent } from "../components/search/SearchComponent"

export async function resultView(data: any) {
    const search = searchComponent()
    const searchHtml = await renderToString(search)

    const listProductsC = listProducts(data.products)
    const listProductsHtml = await renderToString(listProductsC)

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
              ${listProductsHtml}
          </div>
        </body>
      </html>
      `
}