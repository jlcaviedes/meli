import { createSSRApp } from "vue"
import { formatCurrecy } from "../../../../../utils/format"

export function listProducts(items: any[] = []) {
  return createSSRApp({
    methods: {
      currency(value: string) {
        return formatCurrecy(Number(value))
      }
    },
    data: () => {
      return { items }
    },
    template: `
    <div class="list-items">
      <div v-for="item in items" :key="item.id" >
        <a :href="'/items/' + item.id" class="list-item">
          <img :src="item.piture" alt="" class="list-item-image"/>
          <div class="list-item_detail">
            <h3 class="list-item_price"> {{ currency(item.price.currency) }}</h3>
            <article class="list-item_title" >{{item.title}}</article>
          </div> 
          <span class="list-item_free-shipping">{{item.free_shipping? "Envío gratis": ""}}</span>
        </a>
      </div>
    </div>
    `
  })
}

