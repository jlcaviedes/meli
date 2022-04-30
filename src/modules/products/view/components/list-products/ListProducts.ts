import { createSSRApp } from "vue"

export function listProducts(products: any[]) {
  return createSSRApp({
    data: () => {
      return {
        items: [{
          id: "123234"
          , imageUrl: "http://"
        }].concat(products)
      }
    },
    template: `
      <div>
        <div v-for="item in items" :key="item.id">
          <img :src="item.imageUrl" alt="" />
          <div>
            {{item.id}}
            <label>$</label>
            <label>detalle</label>
          </div>
          <label>categoria</label>
        </div>
      </div>
      `
  })
}

