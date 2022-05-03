import { ProductApplication, ProductVueView } from '../../applications';
import { ControllerApiInterface, ControllerViewInterface } from '../../entities/interfaces';
import { ProductApiRepository } from '../repositories/product-api.repository';

export class ProductController implements ControllerViewInterface, ControllerApiInterface {
	private _app: ProductApplication;

	private _view: ProductVueView;

	constructor() {
		this._app = new ProductApplication(new ProductApiRepository());
		this._view = new ProductVueView();
	}

	async searchProductsView(search: string): Promise<string> {
		let viewHtml = '';
		try {
			const data = await this.searchProducts(search);
			viewHtml = await this._view.searchProductsView({ ...data, search });
		} catch (error) {
			viewHtml = await this._view.notFound404View();
		}
		return viewHtml;
	}

	async detailProductView(id: string): Promise<string> {
		let viewHtml = '';

		try {
			const data = await this.detailProductById(id);
			viewHtml = await this._view.detailProductView({ ...data });
		} catch (error) {
			viewHtml = await this._view.notFound404View();
		}

		return viewHtml;
	}

	async notFound404View(): Promise<string> {
		const result = await this._view.notFound404View();
		return result;
	}

	async startView(): Promise<string> {
    const result = await this._view.startView();
		return result;
	}

	async searchProducts(search: string): Promise<any> {
		const result = await this._app.searchProducts(search);
		return result;
	}

	async detailProductById(id: string): Promise<any> {
		const result = await this._app.detailProductById(id);
		return result;
	}
}
