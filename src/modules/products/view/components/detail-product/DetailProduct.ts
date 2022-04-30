import { createSSRApp } from "vue"

export function detailProduct(product: any) {
    return createSSRApp({
        data: () => {
            return { data: product }
        },
        template: `
        <div>
            <div>
            <img src="" alt="" />
            <h3>Description de product</h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
                veritatis fugit distinctio in labore voluptatum nobis quo. Neque natus
                repellat molestias quam! Dolorum odio natus magni consequuntur minus,
                ducimus culpa.
            </p>
            </div>
            <div>
            <span>------</span>
            <h2>Name of product</h2>
        
            <label> $ precio </label>
        
            <button>Comprar</button>
            </div>
        </div>
      `
    })
}

