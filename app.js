import express from "express";
import { Storage } from "./src/data/Storage.js";
import { cutURL } from "./src/cutURL.js";
import { redirect } from "./src/redirect.js";

const app = express();
const port = 8000;

app.use(express.json());

if(Storage.data.links === undefined){
    Storage.data.links = [];
    Storage.write();
}

app.post("/cut", cutURL);

app.get("/", redirect);

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});


