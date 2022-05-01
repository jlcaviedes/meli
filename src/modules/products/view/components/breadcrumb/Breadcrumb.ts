import { createSSRApp } from "vue"
import { formatCurrecy } from "../../../../../utils/format"

export function breadcrumb(points: any) {
    return createSSRApp({

        data: () => {
            return { points }
        },
        template: `
        <div class="breadcrumb-items">
            <div v-for="point in points" :key="point" class="breadcrumb-item" >
                {{point}}
            </div>
        </div>
      `
    })
}
