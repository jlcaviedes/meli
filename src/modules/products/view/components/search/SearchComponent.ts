import { createSSRApp } from "vue";

export function searchComponent() {
    return createSSRApp({
        template: `
            <div>
            
                <input type="search">
            </div>
        `
    })
}