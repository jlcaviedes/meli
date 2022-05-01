import { createSSRApp } from "vue";

export function searchComponent(search: string) {
  return createSSRApp({
    data() {
      return {
        value: search,
      };
    },
    template: `
        <div class="box-search">
        <form action="/items?" method="get" role="search" class="wraper box-search_form">
          <img src="/assets/imgs/logo__large_plus.png" alt="logo" class="box-search_logo" />
          <div class="box-search_container">
            <input class="box-search_input"
              :value="value"
              type="search" name="search" placeholder="Nunca dejes de buscar" />
            <button class="box-search_glass_searh" type='submit'>
              <div class="box-search_glass">
              </div>
              search
            </button>
          </div>
        </form>
      </div>
        `,
  });
}
