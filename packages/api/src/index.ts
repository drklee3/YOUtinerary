import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";
import Config from "./config";

import { searchLocation, searchRoute } from "./search";

const app = new Koa();
const router = new Router();

const koaInterface = process.env.interface || "127.0.0.1";
const koaPort = parseInt(process.env.port || "3000");

function main(): void {
    router.get("/", (ctx) => {
        ctx.body = "Hello Koa";
    });

    router.post("/search", async (ctx) => {
        const { query } = ctx.request.body;
        ctx.body = searchLocation(query);
    });

    router.post("/routes", async (ctx) => {
        const { query } = ctx.request.body;
        ctx.body = searchRoute(query);
    });

    app.use(async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            // will only respond with JSON
            ctx.status = err.statusCode || err.status || 500;
            ctx.body = {
                message: err.message,
            };
        }
    })
        .use(router.routes())
        .use(router.allowedMethods())
        .use(bodyParser());

    app.listen(koaPort, koaInterface, () => {
        console.log(`Listening on ${koaInterface}:${koaPort}`);
    });
}

Config.validOrExit();
main();
