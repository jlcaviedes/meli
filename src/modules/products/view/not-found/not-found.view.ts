import { containerView } from "../container/container.view";

export async function notFoundView() {
    return containerView(`
        <div class="not-found">
            <h1 class="not-found_404">404</h1>
            <form action="/" method="get">
                <button class="not-found_reset">Volver Home</button>
            </form>
        </div>
    `)
}