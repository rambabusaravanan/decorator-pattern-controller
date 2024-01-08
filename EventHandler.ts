export class EventHandler {
  mapping: Record<string, any>;
  constructor() {
    this.mapping = {};
  }

  handle(eventName: string, payload: any) {
    console.log('EventHandler.handle:', eventName, payload);
    const fn = this.mapping[eventName];

    if (fn) {
      fn(payload);
    }
  }
}

export const handlerInstance = new EventHandler();
