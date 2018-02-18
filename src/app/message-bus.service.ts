import { Injectable } from '@angular/core';

@Injectable()
export class MessageBusService {
  private subscribers: Map<String, Array<Function>> = new Map<String, Array<Function>>();

  constructor() {

  }

  public addListener(type: String, listener: Function): void {
      let listeners: Array<Function> = this.subscribers.get(type);

      if (!listeners){
          listeners = [];
      }

      listeners.push(listener);

      this.subscribers.set(type, listeners);
  }

  public sendMessage(message: any, type: string = null): void{
      if (!type) {
          type = message.constructor.name;
      }

      this.subscribers.get(type).forEach(fn => fn(message));
  }

}

