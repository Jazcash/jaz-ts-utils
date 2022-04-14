import { WorkerWrapper } from "./worker-wrapper";

export class BetterWorker extends WorkerWrapper {
    constructor(protected debug = false) {
        super();

        addEventListener("message", (event) => this.onMessage(event));

        if (this.debug) {
            process.on("warning", (err) => {
                console.warn(err.stack);
            });

            process.on("uncaughtException", (err) => {
                console.warn(err.stack);
            });
        }
    }

    public override send(channel: string, data?: any) {
        postMessage({ channel, data });
    }
}