import express from "express";


const _app = express();
const port = process.env.PORT || 3000;
export function startService() {
    app.listen(port, () => console.log("Service started"));
}

export const app = _app