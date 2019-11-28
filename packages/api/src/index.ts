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
        const cacheKey = JSON.stringify(request);

        const cachedReq = cache.get(cacheKey);

        if (cachedReq) {
            console.log("Found cached location query");
            ctx.body = cachedReq;
        } else {
            console.log("Querying Google location");
            const res = await searchLocation(request);
            cache.insert(cacheKey, res);
            ctx.body = res;
        }
    });

    router.post("/routes", async (ctx) => {
        const request = ctx.request.body;
        const cacheKey = JSON.stringify(request);
        const cachedReq = cache.get(cacheKey);

        if (cachedReq) {
            console.log("Found cached route query");
            ctx.body = cachedReq;
        } else {
            console.log("Querying Google route");
            const res = await searchRoute(request);
            cache.insert(cacheKey, res);
            ctx.body = res;
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
