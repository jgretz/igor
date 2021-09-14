import {Logger} from '@nestjs/common';
import io, {Socket} from 'socket.io-client';

export class IgorGateway {
  socket: Socket;

  constructor() {
    this.socket = io(process.env.HERMES_SOCKET_URL, {
      reconnectionDelayMax: 10000,
    });

    this.socket.on('connect', () => {
      Logger.log('Igor Connected');
    });

    this.socket.on('exception', (data) => {
      console.log('event', data);
    });

    this.socket.on('disconnect', () => {
      Logger.log('Igor disconnected');
    });
  }

  send<T>(event: string, ...args: any[]): Promise<T> {
    return new Promise((resolve) => {
      this.socket.emit(event, ...args, (response: T | PromiseLike<T>) => {
        resolve(response);
      });
    });
  }
}
