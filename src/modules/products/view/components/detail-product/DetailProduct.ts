import { createSSRApp } from "vue";
import { formatCurrecy } from "../../../../../utils/format";

export function detailProduct(item: any) {
    return createSSRApp({
        methods: {
            currency(value: string) {
                return formatCurrecy(Number(value));
            }
        },
        data: () => ({ data: item }),
        template: `
        <div class="detail-item">
            <div class="detail-item_column1">
                <img :src="data.piture" alt="" class="detail-item_img" />
                <h1>Descripcion del producto</h1>
                <p class="text-color-light-gray detail-item_description">
                    {{data.description}}
                </p>
            </div>
            <div class="detail-item_column2">
                <span>{{data.condition === "new"? "Nuevo":"Usado"}}</span> 
                <h2>{{data.title}}</h2>            
                <div class="detail-item_price">
                    <h1> {{ currency(data.price.currency) }} 
                        <h2 class="detail-item_decimal"> {{ String(data.price.decimals||0).padEnd(2,'0') }} </h2>
                    </h1>                   
                </div>
                <button class="button-primary">Comprar</button>
            </div>
        </div>
      `
    });
}
