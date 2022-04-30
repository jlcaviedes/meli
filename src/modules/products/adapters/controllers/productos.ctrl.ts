import { ProductApplication } from "../../applications/product.application";
import { ProductVueView } from "../../applications/product.view";
import { ControllerViewInterface } from "../../entities/interfaces/controller-view.interface";
import { ProductApiRepository } from "../repositories/product-api.repository";

export class ProductionController implements ControllerViewInterface {
    private _app: ProductApplication;
    private _view: ProductVueView;

    constructor() {
        this._app = new ProductApplication(new ProductApiRepository())
        this._view = new ProductVueView()
    }

    async start(): Promise<string> {
        return await this._view.start()
    }
    async searchProducts(search: string): Promise<string> {
        return await this._view.searchProducts(search)

    }
    async detailProductById(id: string): Promise<string> {
        return await this._view.detailProductById()

    }
}