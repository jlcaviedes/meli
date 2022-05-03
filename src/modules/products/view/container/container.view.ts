export async function containerView(body: string) {
  return `
      <!DOCTYPE html>
      <html lang="es">
      <html>
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Mercado Libre</title>
          <link rel="stylesheet" href="/assets/styles/global.css">
          <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>
        </head>
        <body>
          <div id="app" class="body-background">
              ${body}
          </div>
        </body>
      </html>
      `;
}
