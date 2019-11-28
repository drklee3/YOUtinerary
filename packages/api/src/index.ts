import cors from "@koa/cors";
import Router from "@koa/router";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import Cache from "./cache";
import Config from "./config";
import { searchLocation, searchRoute } from "./search";

const app = new Koa();
const router = new Router();

const koaInterface = process.env.interface || "127.0.0.1";
const koaPort = parseInt(process.env.port || "3000");

function main(): void {
    const cache = new Cache();

    router.get("/", (ctx) => {
        ctx.body = "Hello Koa";
    });

    router.post("/locations", async (ctx) => {
        const request = ctx.request.body;
        const cachedReq = cache.get(JSON.stringify(request));

        if (cachedReq) {
            console.info("Found cached location query");
            ctx.body = cachedReq;
        } else {
            ctx.body = await searchLocation(request);
        }
    });

    router.post("/routes", async (ctx) => {
        const request = ctx.request.body;
        const cachedReq = cache.get(JSON.stringify(request));

        if (cachedReq) {
            console.info("Found cached route query");
            ctx.body = cachedReq;
        } else {
            ctx.body = await searchRoute(request);
        }
    });

    app.use(logger())
        .use(
            cors({
                origin: "*",
            })
        )
        .use(async (ctx, next) => {
            try {
                await next();
            } catch (err) {
                console.error(err);
                // will only respond with JSON
                ctx.status = err.statusCode || err.status || 500;
                ctx.body = {
                    status: "ERROR",
                    message: err.message,
                };
            }
        })
        .use(bodyParser())
        .use(router.routes())
        .use(router.allowedMethods());

    app.listen(koaPort, koaInterface, () => {
        console.log(`Listening on ${koaInterface}:${koaPort}`);
    });
}

if (!Config.isValid()) {
    console.error(".env file is invalid. Please fix and run again.");
    process.exit(1);
}

main();
