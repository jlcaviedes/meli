import express from "express";
import * as path from "path";

const _app = express();
_app.use("/assets", express.static(path.join(process.cwd(), "/dist/assets")));

const port = process.env.PORT || 3000;
export function startService() {
  app.listen(port, () => {
    console.log("Service started");
    console.log(`http://localhost:${port}`);
  });
}

export const app = _app;
