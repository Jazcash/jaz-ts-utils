import { AbstractWorker } from "./abstract-worker";

export class BetterWorkerHost extends AbstractWorker {
    protected worker: Worker;

    // would be nice if it were possible to pass the worker filepath and initialise it internally,
    // but doesn't seem to play nice with webpack/electron
    constructor(worker: Worker) {
        super();
        this.worker = worker;
        this.worker.onmessage = (event) => this.onMessage(event);

        this.worker.addEventListener("error", (err) => {
            console.error("Worker error", err);
        });
    }

    public send(channel: string, data?: any) {
        this.worker.postMessage({ channel, data });
    }
}
