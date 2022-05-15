import { Signal } from "./signal";

export interface WorkerMessage {
    channel: string;
    data: unknown;
}

export abstract class WorkerWrapper {
    protected messageHandlers: { [channel: string]: Signal<unknown> } = {};

    public send(channel: string, data?: unknown) : void {
        //
    }

    public on(channel: string) : Signal<unknown> {
        if (!this.messageHandlers[channel]) {
            this.messageHandlers[channel] = new Signal();
        }

        return this.messageHandlers[channel];
    }

    public invoke(channel: string, data?: unknown) {
        return new Promise<unknown>(resolve => {
            this.on(channel).addOnce((data: unknown) => resolve(data));
            this.send(channel, data);
        });
    }

    protected onMessage(event: MessageEvent) : void {
        const workerMessage: WorkerMessage = event.data;
        if (this.messageHandlers[workerMessage.channel]) {
            this.messageHandlers[workerMessage.channel].dispatch(workerMessage.data);
        }
    }
}