import { app } from "../../../../core";
import { ProductController } from "../controllers/products.ctrl";

app.get("/", async (req, res) => {
  const viewHtml = await new ProductController().startView();
  res.send(viewHtml);
});

app.get("api/items?", async (req, res) => {
  const { search } = req.query || {};
  const data = await new ProductController().searchProducts(search as string);
  res.json(data);
});

app.get("api/items/:id", async (req, res) => {
  const { id } = req.params || {};
  const data = await new ProductController().detailProductById(id as string);
  res.json(data);
});

app.get("/items?", async (req, res) => {
  const { search } = req.query || {};
  const viewHtml = await new ProductController().searchProductsView(
    search as string
  );
  res.send(viewHtml);
});

app.get("/items/:id", async (req, res) => {
  const { id } = req.params || {};
  const viewHtml = await new ProductController().detailProductView(
    id as string
  );
  res.send(viewHtml);
});

app.get("/*", async (req, res) => {
  const viewHtml = await new ProductController().notFound404View();
  res.send(viewHtml);
});
