import { app } from "../../../../core/app";
import { ProductionController } from "../controllers/productos.ctrl";


app.get("/", async (req, res) => {
    const viewHtml = await new ProductionController().start()
    res.send(viewHtml);
})

app.get("/items?", async (req, res) => {
    const { search } = req.query || {};
    const viewHtml = await new ProductionController().searchProducts(search as string);
    res.send(viewHtml);
})

app.get("/items/:id", async (req, res) => {
    const { id } = req.params || {};
    const viewHtml = await new ProductionController().detailProductById(id as string);
    res.send(viewHtml);
})