import express from "express";
import { APP_PORT, APP_IP_ADDRESS } from "./config";
const app = express();

app.use("/static", express.static("pages"));
app.use("/static", express.static("css"));
app.use("/static", express.static("js"));

app.listen(APP_PORT, () => {
  console.log(`[+] Server started on http://${APP_IP_ADDRESS}:${APP_PORT}/`);
});
