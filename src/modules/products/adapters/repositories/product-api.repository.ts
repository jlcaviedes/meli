import { ProductRepositoryInterface } from "../../entities/interfaces/product-repository.interfaces";

export class ProductApiRepository implements ProductRepositoryInterface {
    searchProducts(search: string) {
        throw new Error("Method not implemented.");
    }
    detailProductById(id: string) {
        throw new Error("Method not implemented.");
    }
}