import cors from "@koa/cors";
import Router from "@koa/router";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
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

    router.post("/locations", async (ctx) => {
        const request = ctx.request.body;

        try {
            ctx.body = await searchLocation(request);
        } catch (e) {
            ctx.body = { status: "ERROR", message: e };
            ctx.status = 500;
        }
    });

    router.post("/routes", async (ctx) => {
        const request = ctx.request.body;

        try {
            ctx.body = await searchRoute(request);
        } catch (e) {
            ctx.body = { status: "ERROR", message: e };
            ctx.status = 500;
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
