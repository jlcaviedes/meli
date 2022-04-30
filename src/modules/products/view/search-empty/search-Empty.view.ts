import { renderToString } from "vue/server-renderer"
import { searchComponent } from "../components/search/SearchComponent"

export async function searchEmptyView() {
  const search = searchComponent()
  const searchHtml = await renderToString(search)
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
        </div>
      </body>
    </html>
    `
}