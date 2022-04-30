import { ProductApplicationInterface } from "../entities/interfaces/product-application.interface";
import { ProductRepositoryInterface } from "../entities/interfaces/product-repository.interfaces";

export class ProductApplication implements ProductApplicationInterface {
    private _repository: ProductRepositoryInterface;

    constructor(repository: ProductRepositoryInterface) {
        this._repository = repository;
    }

    searchProducts(search: string) {
        throw new Error("Method not implemented.");
    }
    detailProductById(id: string) {
        throw new Error("Method not implemented.");
    }
}